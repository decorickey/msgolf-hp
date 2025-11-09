#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${REACT_S3_BUCKET:-}" ]]; then
  echo "環境変数 REACT_S3_BUCKET を設定してください (例: msgolf-hp-static)" >&2
  exit 1
fi

if [[ -z "${CLOUDFRONT_DISTRIBUTION_ID:-}" ]]; then
  echo "環境変数 CLOUDFRONT_DISTRIBUTION_ID を設定してください" >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

pushd "${REPO_ROOT}" >/dev/null
npm install
npm run build
popd >/dev/null

aws s3 sync "${REPO_ROOT}/out/" "s3://${REACT_S3_BUCKET}/" --delete

aws cloudfront create-invalidation \
  --distribution-id "${CLOUDFRONT_DISTRIBUTION_ID}" \
  --paths "/*"

echo "React 静的アセットを s3://${REACT_S3_BUCKET}/ へ同期し、CloudFront (${CLOUDFRONT_DISTRIBUTION_ID}) の無効化を実行しました。"
