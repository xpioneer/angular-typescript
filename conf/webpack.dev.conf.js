const path = require('path'),
  webpack = require('webpack'),
  UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  config = require('./webpack.config.js');

const _PROD_ = process.env.NODE_ENV === 'production'

config.mode = _PROD_ ? 'development' : 'none'
config.watchOptions = {
  aggregateTimeout: 300,
  poll: 1000,
}
config.devServer = {
  port: '9100',
  host: 'localhost',
  
  proxy: [{
    context: ['/api', '/uploads'],
    target: 'http://127.0.0.1:9901'
  }],
  historyApiFallback: true,
  static: {
    directory: path.join(__dirname, 'public'),
  },
  // contentBase: path.join(__dirname, '../dist'),
  // publicPath: '/',
  // inline: true,
  // stats: {
  //   colors: true
  // },
  client: {
    // progress: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  // hot: true,
  // hotOnly: true,
}

config.plugins = (config.plugins || []).concat([
  new webpack.HotModuleReplacementPlugin(),
  // new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    title: 'CMS-FE DEV',
    filename: 'index.html',
    template: '../src/template/index_base.html',
    inject: 'body',
    templateParameters: false,
  })
]);

module.exports = config;