# インフラ移行計画（低トラフィック前提）

このディレクトリでは React 版（Next.js 15）の配信に向けた S3 + CloudFront PoC と App Runner 併用構成をまとめる。

## 1. S3 + CloudFront での PoC

### ビルド
1. ルートで `npm install`、`cd react-app && npm install` を済ませる。
2. `npm run build:react:export`（ルート定義）を実行し、`react-app/out` を生成。
3. `out/` 以下が既存 S3 バケット（例: `msgolf-hp-static`）へアップロードする静的配信資産となる。

### S3
- 既存バケット `msgolf-hp-static` をそのまま利用する。環境に応じて `REACT_S3_BUCKET` のような変数で切替可。
- バージョニング／静的ホスティング設定は CloudFormation (`template.yml`) で管理されているため、追加リソースは不要。
- デプロイ権限は既存 GitHub Actions の IAM ロールを流用。

### CloudFront
- オリジン1: 既存 S3 バケット
- オリジン2: 既存 SSR Lambda (Serverless)
- CloudFormation の `template.yml` で Default Cache Behavior を S3 へ切り替えるか、Behaviors の優先度を調整して React オリジンを優先する。
- `DefaultRootObject: index.html` を設定しておくと、ルートアクセスでも S3 の `index.html` が返る（未設定だと AccessDenied になるので注意）。
- Invalidations: React リリース毎に `/*` を実行（`scripts/deploy-react-static.sh` 参照）。

### 動作確認
- 既存ドメイン（Route53）に紐づく CloudFront をそのまま使用する。必要に応じてステージ用サブドメインを追加。
- ブラウザで React 版が表示されることを確認し、順次 Nuxt 側の Behaviors を削除。

## 2. Nuxt/Serverless の段階的停止
1. CloudFormation (`template.yml`) で Default Cache Behavior が S3（React）に向くよう更新し、`/ssr/*` が必要な間は SSR Lambda を残す。
2. 切替後は Cost Explorer + CloudWatch で CloudFront/S3 のコストと 4xx/5xx を監視し、問題がなければ Serverless デプロイを停止、`/ssr/*` Behavior も削除する。
3. Runbook を更新し、S3 / CloudFront 無効化手順やロールバック方法を記録する。

## 3. ローカル/CI デプロイコマンド

- `scripts/deploy-react-static.sh` を利用すると、既存リソースに対してローカルからもデプロイ可能。
  ```bash
  export REACT_S3_BUCKET=msgolf-hp-static
  export CLOUDFRONT_DISTRIBUTION_ID=E******   # 既存分配ID
  ./scripts/deploy-react-static.sh
  ```
- GitHub Actions では `.github/workflows/build-deploy.yml` が React ビルド→`msgolf-hp-static` 同期まで自動実行。Secrets の AWS 権限は既存設定を利用する。
