# Nuxt 3 Minimal Starter

[HomePage](https://msgolf-factory.com/)

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

npx serverless deploy

aws s3 sync .output/public/ s3://msgolf-hp-static/ --delete
```
