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
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'comma-dangle': ['error', 'always'],
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'object-curly-spacing': ['error', 'always'],
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
    'standard/array-bracket-even-spacing': 'off',
    'standard/object-curly-even-spacing': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    '@typescript-eslint/no-explicit-any': 'error',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json'
    }
  }
};
