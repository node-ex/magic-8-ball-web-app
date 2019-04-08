module.exports = {
  '*.{es6,js,jsx,ts,tsx,vue,json,html}': [
    'npm run lint:eslint',
  ],
  '*.{css,scss}': [
    'npm run lint:stylelint',
  ],
};
