module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "@nuxt/eslint-config"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "double"],
    indent: ["error", 2]
  }
}