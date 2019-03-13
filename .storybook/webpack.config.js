const path = require('path');
const webpack = require('webpack');

module.exports = ({ config, mode }) => {
  Object.assign(config.resolve.alias, {
    '@@': path.resolve(__dirname, '../'),
    '@': path.resolve(__dirname, '../src')
  });

  config.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../src/components')],
    enforce: 'pre'
  });

  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader']
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          data: `
            @import "@/assets/style/main.scss";
            @import "@@/.storybook/storybook.scss";
          `
        }
      }
    ]
  });

  return config;
};
