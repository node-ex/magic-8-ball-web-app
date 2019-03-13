const path = require('path');

const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  lintOnSave: true,
  configureWebpack: config => {
    // Working with Webpack | Vue CLI 3
    // https://cli.vuejs.org/guide/webpack.html)
    // Object.assign(config.resolve.alias, {
    //   '@': path.resolve(__dirname, './src'),
    //   '@@': path.resolve(__dirname, '.')
    //   icons: path.resolve(__dirname, 'node_modules/vue-ionicons/dist')
    // });
    config.plugins.push(
      new StylelintPlugin({
        files: ['**/*.css', '**/*.scss', '**/*.vue']
      })
    );
    // config.devServer = {};
    // Object.assign(config.devServer, {
    //   public: 'localhost/acl', sockPath: '/acl/sockjs-node'
    // });
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/style/main.scss";
        `
      }
    }
  }
  // assetsDir: 'static',
  // publicPath: '/acl/'
};

