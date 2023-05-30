# Nuxt 3 Minimal Starter

## Setup

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build

aws cloudformation deploy --template-file template.yml --stack-name msgolf-hp-resources --parameter-overrides hoge.lambda-url.ap-northeast-1.on.aws AcmId=fuga

npx serverless deploy

aws s3 sync .output/public/ s3://msgolf-hp-static/ --delete
```
