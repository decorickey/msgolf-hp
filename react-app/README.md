MSゴルフHPの React / Next.js 版。Next.js 15 (App Router) + Tailwind CSS で構築し、S3 + CloudFront から静的配信します。

## 開発手順

```bash
npm install
npm run dev
```

- 開発サーバー: http://localhost:3000
- `src/app/page.tsx` がトップページ。Nuxt 版と同じ `id`（about/menu/info/access）を付与しているため、将来的に CloudFront などでルーティング切替しやすい構成です。
- 画像は既存の `public/` アセットをコピーして利用しています。
- 簡易カルーセルは `src/components/ui/image-carousel.tsx` で実装しています（外部依存なし）。

## ビルド

```bash
npm run build
```

ビルド成果物は `.next/` と `out/` に生成されます（`next.config.ts` で `output: "export"` を指定）。`out/` を S3 バケットへ同期し、CloudFront から配信してください。
