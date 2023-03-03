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
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      overrides: [
        {
          files: ['src/index.ts'],
          rules: {
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
          },
        },
        {
          files: ['**/*.spec.ts', '**/*.test.ts'],
          rules: {
            'node/no-unpublished-import': 'off',
            'node/no-extraneous-import': 'error',
          },
        },
      ],
    },
    {
      files: ['*.config.js', '.prettierrc.js'],
      rules: {
        'node/no-unpublished-require': 'off',
      },
    },
  ],
};

module.exports = {
  ...eslintConfig,
};
