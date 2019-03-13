module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-strict-scss',
    'stylelint-config-recess-order'
  ],
  plugins: ['stylelint-scss', 'stylelint-color-format'],
  rules: {
    'at-rule-no-unknown': null,
    'color-format/format': {
      format: 'hsl'
    },
    'color-named': 'always-where-possible',
    'declaration-colon-newline-after': null,
    'no-empty-source': null,
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
          'red'
        ]
      }
    ],
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'value'
        ]
      }
    ]
  }
};
