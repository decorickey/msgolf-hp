# MS Golf HP

Nuxt 4 + Quasar をベースにした既存サイトと、Next.js 15 + Tailwind による React 版を同一リポジトリで管理しています。

## 依存関係の導入

```bash
npm install           # Nuxt (Vue) プロジェクト
cd react-app && npm install   # React (Next.js) プロジェクト
```

## ローカル開発

| 対象 | コマンド | 備考 |
| ---- | -------- | ---- |
| Nuxt (既存) | `npm run dev` | http://localhost:3000 |
| React (Next.js) | `npm run dev:react` | 別ターミナルで起動。内部的に `cd react-app && npm run dev` |

必要に応じてそれぞれのアプリで環境変数を `.env` に設定してください。

## ビルド

```bash
# Nuxt
npm run build

# React
npm run build:react
```

今後のインフラ切替時は React 側のビルド成果物（`react-app/.next` または `react-app/out`）を基準に検討します。
