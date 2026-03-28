---
name: update-deps
description: >-
  msgolf-hp リポジトリ専用の依存更新スキル。Node.js と npm 依存の現状確認、
  mise.toml / package.json / package-lock.json の更新、peer dependency の互換性確認、
  npm run lint / npm run build による検証、更新結果の日本語要約までを行う。
---

`msgolf-hp` の Node.js / 依存更新では以下に従うこと。

## 対象と完了条件

- 対象は `mise.toml`、`package.json`、`package-lock.json` の更新と検証まで。
- Git の commit / push / PR 作成は行わない。必要なら別途ユーザー指示を待つ。
- 完了条件は以下。
  - 更新対象ファイルの差分が意図どおりである
  - `npm run lint` が成功する
  - `npm run build` が成功する
  - 残る `npm outdated --depth=0` があれば、見送った理由を報告する

## repo 固有前提

- Node.js は `mise.toml` で管理する。更新候補は LTS 系を優先する。
- 依存管理は `package.json` と `package-lock.json` を正とする。
- 品質ゲートは `npm run lint` と `npm run build`。
- ビルド副作用で `next-env.d.ts` が変わることがあるため、更新対象かどうかを切り分ける。
- 依存更新後は `npm outdated --depth=0` で残差分を確認する。

## 標準フロー

1. `AGENTS.md`、`mise.toml`、`package.json`、`package-lock.json` を読む。
2. `node -v`、`npm -v`、`npm outdated --depth=0`、必要に応じて `npm view <pkg> version` で現状差分を把握する。
3. Node.js は LTS 系の最新パッチを候補にし、`mise.toml` を更新する。
4. 直接依存の更新候補を決めて `package.json` を更新し、`npm install` で `package-lock.json` を再解決する。
5. peer warning が出た依存はそのまま採用せず、`npm run lint` と `npm run build` の結果で採否を判断する。
6. `git diff --stat` と `git diff -- next-env.d.ts` などで不要差分を確認し、更新対象外の追跡ファイル差分は戻す。
7. 更新したもの、戻したもの、残したもの、検証結果を日本語で要約して報告する。

## 互換性判断ルール

- `next`、`react`、`react-dom`、Tailwind 系は `npm view` で最新を確認してから更新する。
- `eslint-config-next` と `eslint` / `typescript` は peer dependency だけで採用しない。必ず実行結果を優先する。
- メジャー更新で `lint` または `build` が失敗したら、その依存は元に戻し、見送り理由を明示する。
- 警告が出ても `lint` / `build` が通る依存は採用候補にできる。

## この repo で確定している注意点

- `eslint@10` は `eslint-config-next@16.2.1` 配下の `eslint-plugin-react` 系と実運用上の互換問題がある。
- 同条件では `eslint` は 9 系維持を優先する。
- `typescript@6` や `@types/node@25` は警告が出ても、`npm run lint` と `npm run build` が通るなら採用候補にできる。
- `next-env.d.ts` の差分は build の副作用で発生しうるため、意図した更新でない限り戻す。

## 報告フォーマット

最低限以下を含めて日本語で報告する。

- 更新したもの
- 更新を見送ったもの
- 見送った理由
- `npm run lint` と `npm run build` の結果
- `npm outdated --depth=0` の残差分
