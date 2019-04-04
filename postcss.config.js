// const functions = require('./functions')
// const mixins = require('./mixins')

module.exports = function() {
  const plugins = [
    require('postcss-import')({
      path: ['node_modules'],
    }),
    require('tailwindcss')('./tailwind.js'),
    require('postcss-functions')({
      // functions,
    }),
    require('postcss-mixins')({
      // mixins,
    }),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-url'),
    require('autoprefixer')({}),
  ];
  return {
    plugins
  };
};
