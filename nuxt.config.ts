// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-quasar-ui"
  ],
  quasar: {
    plugins: [],
    lang: "ja",
    config: {},
    iconSet: "material-icons",
    extras: {
      fontIcons: ["material-icons"]
    }
  },
  nitro: {
    preset: "aws-lambda",
  },
})
