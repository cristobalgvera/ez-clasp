// @ts-check

/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  extends: ['./node_modules/gts/', 'plugin:prettier/recommended'],
};

module.exports = {
  ...eslintConfig,
};
