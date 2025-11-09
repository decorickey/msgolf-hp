# MS Golf HP

Next.js 15 (App Router + Tailwind) で構築した React 製サイトです。静的ビルドを S3 + CloudFront に配置して配信します。

## セットアップ

```bash
npm install --prefix react-app
```

## ローカル開発

```bash
npm run dev
```

→ 内部的に `cd react-app && npm run dev` を実行し、http://localhost:3000 を起動します。

## ビルド / デプロイ

```bash
npm run build    # = npm run build --prefix react-app
```

生成物は `react-app/out` に展開されます。`scripts/deploy-react-static.sh` もしくは GitHub Actions の `Release` ワークフローで、既存の S3 バケット `msgolf-hp-static` に同期し CloudFront を更新してください。
