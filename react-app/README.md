MSゴルフHPの React / Next.js 版。Nuxt + Quasar 版のセクション構成とコンテンツを Next.js 15 (App Router) + Tailwind CSS で再現しています。

## 開発手順

```bash
npm install         # ルートで Nuxt 依存を導入済みであること
npm run dev         # （React 単体で動かす場合は react-app 直下で実行）
# またはリポジトリ直下から
npm run dev:react
```

- 開発サーバー: http://localhost:3000
- `src/app/page.tsx` がトップページ。Nuxt 版と同じ `id`（about/menu/info/access）を付与しているため、将来的に CloudFront などでルーティング切替しやすい構成です。
- 画像は既存の `public/` アセットをコピーして利用しています。
- 簡易カルーセルは `src/components/ui/image-carousel.tsx` で実装しています（外部依存なし）。

## ビルド

```bash
npm run build
```

ビルド成果物は `.next/` に生成されます。インフラ移行時に ECS/App Runner/S3+CloudFront へデプロイする際のベースとなります。
