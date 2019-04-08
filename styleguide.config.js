const path = require('path');

module.exports = {
  // set your styleguidist configuration here
  title: 'Default Style Guide',
  defaultExample: false,
  components: './src/components/**/[A-Z]*.vue',
  ignore: [
    './node_modules/**/*',
  ],
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  // webpackConfig: {
  //   // custom config goes here
  // }
  // require: [
  //   Object.assign(config.resolve.alias, {
  //     '@': path.resolve(__dirname, './src'),
  //     '@@': path.resolve(__dirname, '.')
  //   }),
  //   path.join(__dirname, './node_modules/uikit/dist/css/uikit.css'),
  //   path.join(__dirname, './node_modules/uikit/dist/js/uikit.js')
  // ]
};
