// @ts-check

/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  extends: [
    './node_modules/gts/',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // warnOnUnsupportedTypeScriptVersion: false,
  },
};

module.exports = {
  ...eslintConfig,
};
