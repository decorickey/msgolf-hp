# MS Golf HP

Next.js 15 (App Router + Tailwind) で構築した React 製サイトです。静的ビルドを S3 + CloudFront に配置して配信します。

## セットアップ

```bash
npm install
```

## ローカル開発

```bash
npm run dev
```

http://localhost:3000 で確認できます。

## ビルド / デプロイ

```bash
npm run build
```

生成物は `out/` に展開されます。`scripts/deploy-react-static.sh` もしくは GitHub Actions の `Release` ワークフローで、既存の S3 バケット `msgolf-hp-static` に同期し CloudFront を更新してください。
