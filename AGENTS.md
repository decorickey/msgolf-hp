# Repository Guidelines

## Project Structure & Module Organization
Nuxt 4 + Quasar UI を採用しています。`pages/` はルーティング定義、`components/` は再利用可能な UI、`app.vue` と `nuxt.config.ts` がグローバル設定です。静的アセットは `public/`、サーバレス関連は `serverless.yml` と `template.yml`、型設定は `tsconfig.json` にあります。デザインガイドや共有ロジックはファイル先頭コメントで簡潔に説明し、同ディレクトリ内の README を更新してください。

## Build, Test, and Development Commands
- `npm install`：Volta が固定した Node 22.12.0 で依存を導入します。
- `npm run dev`：ホットリロード付きで `http://localhost:3000` を起動します。
- `npm run build`：サーバレス配備向けに本番ビルドを生成します。
- `npm run generate`：静的ホスティング用の `dist/` を作ります。
- `npm run lint`：`eslint .` で SFC/TS/Serverless 設定を検証します。テストスクリプトは未定義ですが、追加時は `npm run test` → `vitest run` を想定してください。

## Coding Style & Naming Conventions
公式 ESLint 設定（@nuxt/eslint-config）をベースに 2 スペースインデント、セミコロン無し、single quote を推奨します。Vue コンポーネントは PascalCase、Composable は `useXxx`、ローカル変数・関数は camelCase。SFC 内部では `<script setup lang="ts">` を標準化し、CSS は BEM か `component__element--modifier` の派生を使って衝突を避けます。型定義や API レスポンスは `types/` を作成し再利用します。

## Testing Guidelines
現状は Lint を最低ラインとし、UI ロジックは Vitest + Vue Test Utils、E2E は Playwright を推奨します。コンポーネントテストはテーブル駆動の `describe.each` / `test.each` で入力差分を列挙し、Kent Beck と t_wada の TDD サイクル（レッド→グリーン→リファクタ）を厳守します。`npx vitest run --coverage` を CI とローカルで同じオプションに揃えてください。

## Commit & Pull Request Guidelines
Git 履歴は短い英語インペラティブ（例: `fix`, `update`）で統一されています。コミット単位は「1 目的 1 変更」に分割し、必要なら `Co-authored-by` を追記してください。PR では目的、主要な UI 変更スクリーンショット、テストコマンドの実行結果、関連 Issue をテンプレート的に箇条書きで記載し、レビュー前に ESLint と（存在する場合）テストを必ず通します。

## Security & Configuration Tips
環境変数は `.env` または `serverless.yml` の `environment` ブロックで管理し、API キーを `public/` に入れないでください。Stage ごとに `serverless deploy --stage <env>` を使い分け、公開ドメイン変更時は `nuxt.config.ts` の `app.baseURL` を同期させます。依存更新時は `npm run lint` と最低 1 回の本番ビルドを行い、CI が無い場合でもローカルでの確認結果を PR に添えてください。
