---
title: おうち k8s の構成と運用
description: 自宅の1ノードk8sクラスタについて、構成、公開経路、データの置き場所、更新と再構築の手順を記録する。
date: 2026-09-29
---

自宅では、個人開発したアプリケーションや監視ツールを動かすために k8s クラスタを運用しています。あとから構成と復旧手順を思い出せるように、2026 年 9 月末時点の[home_serverリポジトリ](https://github.com/otknoy/home_server/tree/9a0100d31ed56c41fddc7ba26a05cd2b12b32fdc)をもとに記録します。

## 全体構成

クラスタは、1 台のマシンを control plane 兼 worker として使っています。

```text
GitHub ── Argo CD ── k8s（Talos Linux、1ノード）
                        ├─ アプリケーション・監視
                        ├─ Envoy Gateway ── LAN / Tailscale
                        ├─ Tailscale Ingress ── 個別サービス
                        └─ NFS ── Synology DS224+
```

ノードの OS は Talos Linux です。API 経由で管理する k8s 向けの OS で、通常の Linux サーバのように SSH で入る運用はしません。control plane の taint を外し、同じノードに通常の Pod も配置しています。1 ノードなので冗長性はありません。

## 壊してもすぐに直せるように

1 ノード構成なので、ノードが壊れるとクラスタ全体が止まります。そのときに手作業で設定を思い出さなくて済むよう、Talos Linux の設定と k8s のマニフェストを Git で管理しています。Talos Linux の設定生成、検証、適用は[`k8s/talos/Makefile`](https://github.com/otknoy/home_server/blob/9a0100d31ed56c41fddc7ba26a05cd2b12b32fdc/k8s/talos/Makefile)から実行でき、適用前には dry-run で確認できます。

認証情報は Sealed Secrets で暗号化して Git に保存しています。再構築するときは、まず Sealed Secrets のコントローラを導入し、保管しておいた秘密鍵を復元します。次に Argo CD を導入し、クラスタ基盤の`platform`が同期済みかつ Healthy になってから、アプリケーションや監視を含む`base`を登録します。以後のマニフェストは Argo CD が Git から同期します。この順序とコマンドは[`k8s/README.md`](https://github.com/otknoy/home_server/blob/9a0100d31ed56c41fddc7ba26a05cd2b12b32fdc/k8s/README.md)に記録しています。

復旧には、Git 上の設定に加えて、NFS 上のデータと Sealed Secrets の秘密鍵が必要です。クラスタを作り直しやすくするため、永続データはノードの外に置いています。

## ネットワークと公開経路

クラスタの共通入口には Envoy Gateway を使っています。MetalLB が LAN 内の LoadBalancer 用アドレスを割り当て、Tailscale Operator が同じ Service を tailnet へ公開します。Web Dashboard や Grafana、Prometheus、Alertmanager、Pushgateway は Gateway API の HTTPRoute で振り分けます。

Argo CD、n8n、コンテナレジストリは、それぞれ Tailscale Ingress で公開しています。レジストリには Web UI も置き、`/v2`をレジストリ本体、それ以外を UI へ転送します。いずれも、リポジトリ上ではインターネットへの直接公開を設定していません。

`platform`には、このほか cert-manager、NFS Subdirectory External Provisioner、Sealed Secrets を配置しています。metrics-server と kube-state-metrics も基盤の一部です。

## データの置き場所

永続データの保存先には Synology DS224+の NFS 共有を使っています。`nfs-client`という StorageClass を用意し、PVC を作ると NAS の`/volume1/nfs`配下に namespace と PVC 名に応じたディレクトリが作られます。

現状、PVC を使っているのはコンテナレジストリ、Prometheus、n8n、n8n 用 PostgreSQL です。Grafana のダッシュボードとデータソース設定は ConfigMap から読み込み、Grafana の作業用ディレクトリには`emptyDir`を使っています。Alertmanager の設定も ConfigMap と Secret から読み込み、データ用 PVC はありません。

計算を k8s ノード、永続データを NAS に分けておくと、クラスタを作り直すときにデータを引き継ぎやすくなります。ただし、この構成だけでは NAS の故障からデータを守れません。

## 動かしているもの

- `roomctl`: 自作の部屋管理アプリケーション
- Web Dashboard: 自宅サービスへの入口
- n8n と PostgreSQL: ワークフローとそのデータベース
- Docker Registry と Web UI: コンテナイメージの保存と閲覧
- Prometheus、Grafana、Alertmanager、Pushgateway: メトリクスの収集、表示、通知

n8n と PostgreSQL には startup、liveness、readiness の各 Probe とリソース制限を設定しています。Prometheus は k8s のノード、Pod、Service のメトリクスを収集し、Grafana で可視化します。アラートは Alertmanager から通知します。

## 更新

コンテナイメージと主要な上流マニフェストのバージョンは Renovate で追跡しています。上流マニフェストは更新スクリプトで再生成します。Renovate には PR の自動マージ設定があり、GitHub Actions は現行コミットに対するオーナーの承認状況を commit status へ記録します。更新後は Argo CD が Git の内容を同期します。

1 ノード構成なので、ノードの停止や更新中はサービスも止まります。今後の変更も、構成だけでなく再構築に必要な手順とデータの置き場所を合わせて記録していきます。
