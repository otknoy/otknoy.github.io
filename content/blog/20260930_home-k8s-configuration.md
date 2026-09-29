---
title: おうち k8s の構成
description: 自宅の1ノード k8s クラスタの構成を記録する。
date: 2026-09-30
---

自作のアプリケーションや興味のある技術を試すために、自宅で k8s クラスタを運用しています。
この記事では、[home_server リポジトリ](https://github.com/otknoy/home_server/tree/b98a34237a4e238418018f9b9524546cf2f52589)をもとに、2026年9月30日時点の構成を記録します。

## 全体構成

現在は、N100搭載のミニ PC に [Talos Linux][talos-linux] を入れ、1ノードで k8s クラスタを動かしています。
このノードが control plane と worker を兼ね、control plane の taint を外してアプリケーションの Pod も配置しています。
おうち用なので可用性は求めておらず、ノードが止まるとクラスタ全体が止まります。
購入したものの使っていないミニ PC がもう1台あり、将来ノードとして追加する可能性があります。

```text
GitHub
  └─ Argo CD
       └─ k8s（Talos Linux、1ノード）
            ├─ アプリケーション
            ├─ 監視
            └─ クラスタ基盤
                 ├─ Envoy Gateway（Gateway API で経路を定義）
                 ├─ Tailscale Operator ── tailnet からのアクセス
                 └─ NFS ─────── Synology NAS
```

永続データは NFS で Synology の NAS に保存しています。

## アクセス経路

共通の入口には Ingress ではなく [Gateway API][gateway-api] を使っています。
Gateway API の実装には [Envoy Gateway][envoy-gateway] を使っています。
[MetalLB][metallb] が Gateway の Service に LAN 内の LoadBalancer 用アドレスを割り当てます。
[Tailscale Operator][tailscale-operator] は同じ Service を tailnet へ公開します。
Gateway API の HTTPRoute で Web Dashboard や監視サービスへ振り分けています。

[Argo CD][argo-cd]、[n8n][n8n]、コンテナレジストリは、それぞれ Tailscale Ingress で公開しています。
クラスタのマニフェストには、インターネットへの直接公開を設定していません。

## 動かしているもの

- さまざまな自作アプリケーション
- Web Dashboard: 自宅サービスへの入口
- n8n と PostgreSQL: ワークフローとそのデータベース
- [Docker Registry][distribution] と Web UI: コンテナイメージの保存と閲覧
- [Prometheus][prometheus]、[Grafana][grafana]、[Alertmanager][alertmanager]、[Pushgateway][pushgateway]: メトリクスの収集、表示、通知

監視では、Prometheus が k8s のノード、Pod、Service のメトリクスを収集します。
基盤には、このほか [cert-manager][cert-manager]、[Sealed Secrets][sealed-secrets]、[metrics-server][metrics-server]、[kube-state-metrics][kube-state-metrics] などを配置しています。

## 壊しても直せるように

Talos Linux の設定と k8s のマニフェストを Git に残し、永続データをノードの外に置いています。
ノードが壊れても、設定からクラスタを作り直し、既存のデータを使えるようにしています。
復旧には Sealed Secrets の秘密鍵も必要です。
NAS 自体の故障に備えるには、別途バックアップが必要です。

[alertmanager]: https://prometheus.io/docs/alerting/latest/alertmanager/
[argo-cd]: https://argo-cd.readthedocs.io/en/stable/
[cert-manager]: https://cert-manager.io/
[distribution]: https://distribution.github.io/distribution/
[envoy-gateway]: https://gateway.envoyproxy.io/
[gateway-api]: https://gateway-api.sigs.k8s.io/
[grafana]: https://grafana.com/oss/grafana/
[kube-state-metrics]: https://github.com/kubernetes/kube-state-metrics
[metallb]: https://metallb.io/
[metrics-server]: https://github.com/kubernetes-sigs/metrics-server
[n8n]: https://n8n.io/
[prometheus]: https://prometheus.io/
[pushgateway]: https://github.com/prometheus/pushgateway
[sealed-secrets]: https://github.com/bitnami/sealed-secrets
[talos-linux]: https://www.siderolabs.com/talos-linux
[tailscale-operator]: https://tailscale.com/docs/kubernetes-operator
