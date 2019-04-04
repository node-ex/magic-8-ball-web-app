module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],
  plugins: ['stylelint-color-format'],
  rules: {
    'at-rule-no-unknown': null,
    'color-format/format': {
      format: 'hsl'
    },
    'selector-max-compound-selectors': 10,
    'color-named': 'always-where-possible',
    'declaration-colon-newline-after': null,
    'no-empty-source': null,
    'block-closing-brace-empty-line-before': null,
    'max-nesting-depth': 10
  }
};
