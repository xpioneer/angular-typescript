const { AngularWebpackPlugin } = require('@ngtools/webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

const _PROD_ = process.env.NODE_ENV === 'production'

module.exports = {
  devServer: {
    port: '9100',
    historyApiFallback: true,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
  mode: _PROD_ ? 'production' : 'development',
  entry: './demos/app.ts', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    assetModuleFilename: 'static/assets/[hash][ext][query]',
  },
  resolve: {
    extensions: ['.ts', '.js'], // 解析 .ts 和 .js 文件
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: '@ngtools/webpack',
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new AngularWebpackPlugin({
      tsconfig: './demos/tsconfig.json',
      jitMode: true,
    }),
    new HtmlWebpackPlugin({
      title: 'CMS-FE DEV',
      filename: 'index.html',
      template: './demos/index.html',
      inject: 'body',
      templateParameters: false,
    })
  ],
};
