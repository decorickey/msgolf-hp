// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-quasar-ui"
  ],
  quasar: {
    plugins: [],
    lang: "ja",
    config: {}
  },
  nitro: {
    preset: "aws-lambda",
  }
})
