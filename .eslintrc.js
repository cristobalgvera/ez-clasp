// @ts-check

/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  extends: [
    'eslint:recommended',
    './node_modules/gts/',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      files: ['*.ts'],
      excludedFiles: ['src/index.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    {
      parser: '@typescript-eslint/parser',
      files: ['src/index.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};

module.exports = {
  ...eslintConfig,
};
