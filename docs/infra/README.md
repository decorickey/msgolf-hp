# React + S3/CloudFront 運用メモ

Next.js 15 を静的ビルドし、既存の S3 バケット `msgolf-hp-static` と CloudFront ディストリビューションで配信する構成です。

## ビルド
1. `npm install`
2. `npm run build`
3. 生成物は `out/` に出力されます。

## デプロイ
- ローカルから反映する場合:  
  ```bash
  export REACT_S3_BUCKET=msgolf-hp-static
  export CLOUDFRONT_DISTRIBUTION_ID=E******   # 既存分配ID
  ./scripts/deploy-react-static.sh
  ```
- CI（GitHub Actions `Release`）では Next.js のビルド後に同じ S3 バケットへ同期し、CloudFront 無効化を実行します。

## CloudFormation (`template.yml`)
- 管理対象: S3 バケット、OAC、CloudFront ディストリビューション。
- `DefaultRootObject: index.html` を設定済み。ルートアクセスでも S3 の `index.html` が返ります。
- CloudFront には React 静的オリジンのみを登録しています。

## 監視と運用
- デプロイ後は CloudFront/S3 の 4xx/5xx、および Cost Explorer で月次コストを確認する。
- 問題があればテンプレートをロールバックし、前回正常時の S3 コンテンツを再同期することで復旧できます。
