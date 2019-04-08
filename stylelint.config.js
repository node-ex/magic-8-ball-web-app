module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-strict-scss',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-color-format',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'color-format/format': {
      format: 'hsl',
    },
    'selector-max-compound-selectors': 10,
    'color-named': 'always-where-possible',
    'declaration-colon-newline-after': null,
    'no-empty-source': null,
    'block-closing-brace-empty-line-before': null,
    'max-nesting-depth': 10,
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-named-arguments': [
      'always',
      {
        ignoreFunctions: [
          'abs',
          'blue',
          'darken',
          'green',
          'if',
          'lighten',
          'nth',
          'quote',
          'red',
          'counter',
        ],
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'value',
        ],
      },
    ],
  },
};
