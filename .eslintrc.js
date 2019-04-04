module.exports = {
  root: true,
  env: {
    'browser': true,
    'node': true,
    'es6': true,
    'jest': true,
    'worker': true
  },
  plugins: [
    'json',
    'vue'
  ],
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/typescript'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['warn', {
      code: 80,
      ignoreComments: false,
      ignoreTrailingComments: false
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 'error',
    'prefer-const': ['error', {
      destructuring: 'all',
      ignoreReadBeforeAssign: false
    }],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent-as-needed'],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json'
    }
  }
};
