---
title: おうち k8s に Tailscale Kubernetes Operator を導入する
description: 自宅の Kubernetes に Tailscale Kubernetes Operator を導入し、サービスの公開と kubectl による操作を tailnet 経由で行う方法を紹介する。
date: 2026-10-21
---

外出先から自宅の Kubernetes クラスタのアプリケーションを利用し、`kubectl`で操作するために、Tailscale Kubernetes Operator を導入しました。

[Tailscale Kubernetes Operator][operator] を使うと、Service や Ingress の設定をもとに、クラスタ内のサービスを tailnet へ公開できます。
さらに API server proxy を有効にすれば、Tailscale の認証情報を使って`kubectl`からクラスタを操作できます。

マニフェストは [home_server リポジトリ][repository]で管理しています。
ここで紹介する構成は、2026年10月7日時点のものです。

## 自宅での構成

自宅のクラスタは Talos Linux を使った1ノード構成です。
マニフェストは Git に保存し、Argo CD で同期しています。

tailnet は、Tailscale に接続した端末やサービスで構成するプライベートなネットワークです。
用途ごとの接続経路は次のとおりです。

```text
Tailscale に接続した端末
  ├─ Tailscale Ingress → アプリケーションの Service
  ├─ Tailscale プロキシ → Envoy Gateway → HTTPRoute → Service
  └─ API server proxy → Kubernetes API server
```

## 1. タグと Operator の認証情報

まず、Tailscale の管理画面で Operator とプロキシに付けるタグを定義します。
タグは、Tailscale 上の端末を役割ごとに識別し、アクセス制御の対象に指定するためのラベルです。

Operator とプロキシには、それぞれ次のタグが自動で付与されます。

- `tag:k8s-operator`：Tailscale に端末として登録される Operator 自身に付けるタグ
- `tag:k8s`：アプリケーションへの通信を転送するプロキシに付けるタグ

公式の[インストールガイド][install]に沿って、アクセス制御ポリシーの`tagOwners`に次の設定を追加します。

```json
{
  "tagOwners": {
    "tag:k8s-operator": [],
    "tag:k8s": ["tag:k8s-operator"]
  }
}
```

`tagOwners`は、そのタグを誰が付与できるかを定義します。
`"tag:k8s": ["tag:k8s-operator"]`は、`tag:k8s-operator`を持つ Operator に、`tag:k8s`を付与する権限を与える設定です。

タグを付与する権限と、端末間の通信を許可する設定は別です。
通信を許可するルールでは、アプリケーション用のプロキシには`tag:k8s`、API server proxy には`tag:k8s-operator`を宛先として指定します。

### Operator が読み込む認証情報

認証情報は、`tailscale` namespace の`operator-oauth` Secret に格納しています。
Secret は [SealedSecret のマニフェスト][operator-oauth]から生成し、次の2つのキーを持ちます。

- `client_id`：OAuth クライアント ID
- `client_secret`：OAuth クライアントシークレット

Operator は、この Secret を`/oauth`にマウントして認証情報を読み込みます。

## 2. Kustomize で Operator を導入する

公式の静的マニフェストを`upstream/operator.yaml`に置き、[Kustomize][kustomization] でパッチと SealedSecret を組み合わせています。
Argo CD がこの構成をクラスタへ適用します。

公式マニフェストに含まれる空の`operator-oauth` Secret は、パッチで削除します。
代わりに、Git に保存した SealedSecret をクラスタ内で復号し、同名の Secret を生成します。

Argo CD で同期した後、Tailscale 管理画面の Machines を開きます。
`tailscale-operator`という端末に`tag:k8s-operator`が付いていれば、Operator が tailnet に参加できています。

## 3. アプリケーションを tailnet へ公開する

Web アプリケーションは、`ingressClassName: tailscale`を指定した Ingress で公開できます。
ここでは、既存の`example-web` Service の80番ポートへ転送する例を使います。
次の内容を`example-web-ingress.yaml`に保存し、Service と同じ namespace に適用します。

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-web
spec:
  ingressClassName: tailscale
  tls:
    - hosts:
        - example-web
  rules:
    - http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: example-web
                port:
                  number: 80
```

Tailscale 管理画面の DNS で、MagicDNS と HTTPS 証明書の発行を有効にしておきます。
この Ingress を適用すると、Operator がプロキシ Pod を作成し、`example-web` Service の80番ポートへ通信を転送します。
続いて、Ingress に割り当てられたアドレスを確認します。

```bash
kubectl apply -f example-web-ingress.yaml
kubectl get ingress example-web
```

表示された`.ts.net`のアドレスへ、アクセスを許可した Tailscale 端末のブラウザから HTTPS で接続します。
[Tailscale Ingress][ingress] は、通常は tailnet 内にのみ公開されます。

### Envoy Gateway 経由で公開する

自宅では、共通の入口に Envoy Gateway も使っています。
Envoy Gateway が生成する Service に、次のアノテーションを付けています。

```yaml
annotations:
  tailscale.com/expose: 'true'
  tailscale.com/hostname: otknoy-k8s
```

この設定は、[EnvoyProxy の`envoyService.annotations`][gateway] に記載しています。
`tailscale.com/expose`が Service の公開を有効にし、`tailscale.com/hostname`が tailnet 上の端末名を指定します。
Operator は Service への通信を転送し、Envoy Gateway が HTTPRoute の設定に従って各サービスへ振り分けます。

この方法では、Operator による HTTPS の終端は行いません。
現在の Gateway は80番ポートの HTTP リスナーを使っています。

## 4. Tailscale 経由で kubectl を使う

Tailscale の API server proxy を使うと、tailnet に接続したクライアントから、プロキシ経由で Kubernetes API server にアクセスできます。

Kustomize のパッチで、Operator の Deployment に次の環境変数を追加しています。

```yaml
- name: APISERVER_PROXY
  value: 'true'
```

[API server proxy][api-server] は、接続元の Tailscale の認証情報に基づき、Kubernetes のユーザーやグループとしてリクエストを送信します。
この仕組みを[impersonation（代理実行）][auth-rbac]と呼びます。
設定は、次の2段階に分かれます。

1. Tailscale のポリシーで、接続元と Kubernetes グループを対応付ける
2. Kubernetes RBAC で、そのグループに操作権限を付与する

接続できるだけではクラスタを操作する権限は得られないため、両方の設定が必要です。

### 接続元の端末と Kubernetes グループを対応付ける

自宅では、`tag:k8s-developer`を付けた信頼する端末だけを接続対象にしています。
次の`grants`で、`tag:k8s-developer`から`tag:k8s-operator`への TCP 443 通信を許可します。
`app`で、接続元を Kubernetes の`tailnet-k8s-developers`グループに対応付けます。
既存のポリシーに`grants`がある場合は、その配列に以下の要素を追加します。
ほかの`grants`や`acls`で同じ宛先への通信を許可していると、このルールの対象外の端末からも接続できるため、既存の許可も確認します。

```json
{
  "grants": [
    {
      "src": ["tag:k8s-developer"],
      "dst": ["tag:k8s-operator"],
      "ip": ["tcp:443"],
      "app": {
        "tailscale.com/cap/kubernetes": [
          {
            "impersonate": {
              "groups": ["tailnet-k8s-developers"]
            }
          }
        ]
      }
    }
  ]
}
```

`tag:k8s-developer`の所有者も、`tagOwners`に設定しておきます。

### Kubernetes 側で権限を付与する

Operator の ServiceAccount に、`users`と`groups`の`impersonate`権限を[付与します][proxy-rbac]。

次は、`tailnet-k8s-developers`グループに、`default` namespace の`edit`権限を付与する例です。

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: tailnet-k8s-developers
  namespace: default
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: edit
subjects:
  - kind: Group
    name: tailnet-k8s-developers
    apiGroup: rbac.authorization.k8s.io
```

`roleRef`は標準の ClusterRole である`edit`を参照します。
RoleBinding の付与範囲は、`metadata.namespace`で指定した`default` namespace に限られます。

### 手元の kubeconfig を設定する

API server proxy はクラスタ内で動くため、障害で Operator が起動できない場合には使えません。
復旧には、既存の管理者 kubeconfig と直接接続できる経路も必要です。

API server proxy の設定が反映されたら、アクセスを許可した Tailscale 端末で次を実行します。

```bash
tailscale configure kubeconfig tailscale-operator
kubectl config current-context
kubectl get pods -n default
kubectl auth can-i create deployments -n default
```

ホスト名を変更している場合は、管理画面に表示されるプロキシの MagicDNS 名を指定します。

Pod 一覧を取得でき、Deployment の作成権限の確認で`yes`が返れば、設定は完了です。
以降は、このコンテキストで tailnet 経由の`kubectl`操作ができます。

[operator]: https://tailscale.com/docs/kubernetes-operator
[install]: https://tailscale.com/docs/kubernetes-operator/install-operator
[ingress]: https://tailscale.com/docs/kubernetes-operator/ingress
[api-server]: https://tailscale.com/docs/kubernetes-operator/api-server-access
[auth-rbac]: https://tailscale.com/docs/kubernetes-operator/api-server-access/auth-and-rbac
[repository]: https://github.com/otknoy/home_server/tree/313f0975b909a9ddb5b2b94b5ee9a369b738bad9
[kustomization]: https://github.com/otknoy/home_server/blob/313f0975b909a9ddb5b2b94b5ee9a369b738bad9/k8s/manifest/platform/tailscale/kustomization.yaml
[gateway]: https://github.com/otknoy/home_server/blob/313f0975b909a9ddb5b2b94b5ee9a369b738bad9/k8s/manifest/platform/gateway/gateway.yaml
[proxy-rbac]: https://github.com/otknoy/home_server/blob/313f0975b909a9ddb5b2b94b5ee9a369b738bad9/k8s/manifest/platform/tailscale/api-server-proxy-rbac.yaml
[operator-oauth]: https://github.com/otknoy/home_server/blob/2aacd3ca38c3baa38b05bc66455afc3634016aad/k8s/manifest/platform/tailscale/secrets/operator-oauth.yaml
