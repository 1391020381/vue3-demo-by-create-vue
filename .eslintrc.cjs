/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "warn",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};
