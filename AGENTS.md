# AGENTS.md

## リポジトリ概要
- Nuxt 4 + TypeScript で構築されたフロントエンドアプリケーション。
- Quasar UI を利用したシングルページ構成で、MSゴルフファクトリー公式サイトのトップページを表示。
- デプロイは Serverless Framework (`serverless.yml`) を介して AWS Lambda（関数 URL 有効化）に実施する想定。

## 技術スタック
- Nuxt 4 / Vue 3（`app.vue`, `pages/index.vue`, `components/*`）
- Quasar UI（`nuxt.config.ts` にて `nuxt-quasar-ui` モジュールを導入）
- TypeScript（一部コンポーネントは最低限のロジックのみ）
- 静的アセットは `public/` 配下に集中し、Sass の利用は限定的

## アプリケーション構成
- `app.vue`: Quasar の `q-layout` をベースにヘッダー・ドロワー・ページコンテナを定義。スクロールナビゲーションのロジックを保持。
- `pages/index.vue`: トップページ本体。各セクションコンポーネントを並べる役割のみ。
- `components/*`: トップページ表示用のセクション群。
  - `TopCarousel.vue`: トップ画像のカルーセル。
  - `TopAbout.vue`: 店舗紹介テキスト。
  - `TopInfo.vue`: お知らせリストと Twitter タイムライン埋め込み（`useHead` でウィジェット読み込み）。
  - `WorkshopMenu.vue`: 工房メニュー紹介＋カルーセル。
  - `MakersAndClubs.vue`: 取り扱いメーカー一覧とクラブ画像カルーセル。ブランドごとに静的データを保持。
  - `BusinessInfo.vue`, `AccessInfo.vue`: 営業案内・住所・地図などの静的情報。
  - `ContentTitle.vue`: 各セクション見出し用のラッパー。
- `public/`: ロゴやクラブ写真、トップ画像などの静的アセット。

## インフラ・デプロイ関連
- `nuxt.config.ts`: `nitro.preset = "aws-lambda"` で Lambda 配備を前提化。Quasar 設定もここで管理。
- `serverless.yml`: `SSRFunction` を Node.js 22 ランタイムで Lambda へ配置し、`url: true` で関数 URL を有効化。
- `template.yml`: S3 バケットと CloudFront ディストリビューション、OAC、証明書 ARN を CloudFormation で構築（静的アセット配信用と推測）。
- `package.json`: `nuxt`, `nuxt-quasar-ui`, `serverless` などの依存関係とビルド／開発スクリプトを定義。

## 現状の課題・留意点
- Lambda 関数 URL のリソースポリシー: Serverless Framework 3.38.0 が `lambda:InvokeFunctionUrl` のみを付与しており、AWS の新要件（`lambda:InvokeFunction` 追加）に未対応。2026/11/1 以降にアクセス拒否となるリスク。
- コンテンツはほぼ静的でコンポーネント内にハードコードされているため、更新時は手動編集が必要。
- テスト・型定義ファイル・CI/CD 設定は見当たらず、品質保証の仕組みが未整備。
- 画像アセットが大量にあり、ビルド成果物サイズや最適化（圧縮・WebP 変換など）の余地がある。

## 推奨アクション
1. Lambda 関数 URL の権限ポリシーを新モデルへ更新（Serverless Framework の対応版へアップグレード、または `resources` セクション等で明示的に両アクションを付与）。
2. 静的コンテンツ更新の運用改善（CMS 導入、データ定義の分離など）を検討。
3. 画像最適化やパフォーマンス改善（レスポンスサイズ削減、遅延読み込み等）を評価。
4. 今後の改修に備えて lint / test / CI 体制を整備し、自動検証を導入。
