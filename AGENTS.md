# Repository Guidelines

## Project Structure & Module Organization
- Next.js 15(App Router) + Tailwind CSS 構成です。`src/` にアプリ本体、`public/` に静的アセット、`next.config.ts` と `tsconfig.json` がルートにあります。
- 共有ロジックやセクションは `src/components/` と `src/data/` に配置しています。新規追加時はファイル冒頭に簡潔なコメントを入れ、同ディレクトリの README やドキュメントを更新してください。
- インフラ関連は `template.yml`（CloudFront + S3）と `docs/infra/README.md`、手動デプロイスクリプトは `scripts/` にあります。

## Build, Test, and Development Commands
- `npm install`：Volta で固定した Node 22.12.0 を利用して依存を導入します。
- `npm run dev`：http://localhost:3000 で開発サーバーを起動します。
- `npm run lint`：ESLint を実行します。基本的に lint を最低ラインの品質ゲートとしてください。
- `npm run build`：`out/` に静的エクスポートを生成します。S3/CloudFront への配信はこの成果物を同期します。
- デプロイは GitHub Actions `Release` か `scripts/deploy-react-static.sh` を利用し、`msgolf-hp-static` バケットへ同期後 CloudFront を無効化します。

## Coding Style & Naming Conventions
- Next.js 公式 ESLint 設定（`eslint-config-next`）をベースにし、TypeScript/React の一般的なスタイルガイドに従います。
- コンポーネントは PascalCase、hooks やユーティリティは `useXxx` / `xxxUtils` 命名、CSS は Tailwind を基本とし必要に応じてモジュール CSS を使用します。
- `src/data/` では `as const` で静的データを定義し、型安全性を保ちます。

## Testing / Quality
- 現在は Lint を最低ラインとしており、自動テストは任意です。必要に応じて React Testing Library + Vitest/Jest を導入してください。
- 重要機能にテーブル駆動（`describe.each`, `test.each`）を採用し、Kent Beck / t_wada の Red-Green-Refactor を意識することを推奨します。

## Commit & Pull Request Guidelines
- Git 履歴は短い英語インペラティブ（例: `add`, `fix`, `refactor`）で統一してください。
- PR では目的、UI 差分（必要ならスクリーンショット）、実行したコマンド（lint/build 等）、関連 Issue を箇条書きでまとめます。
- レビュー前に `npm run lint` と `npm run build` を通し、問題ないことを確認してください。

## Security & Configuration Tips
- 環境変数は `.env` で管理し、機密情報を `public/` に置かないでください。
- CloudFront/Route53 等の本番設定は `template.yml` で管理し、変更時は GitHub Actions から CloudFormation を更新します。
- 依存更新後は少なくとも `npm run lint` と `npm run build` を実行し、S3/CloudFront デプロイ前に `./scripts/deploy-react-static.sh` の動作確認を行ってください。
