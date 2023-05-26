module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true,
    "jest/globals": true
  },
  plugins: ["jest"],
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {}
};
