const { AngularWebpackPlugin } = require('@ngtools/webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  devServer: {
    port: '9101',
    historyApiFallback: true, // 如果你使用的是 Angular 路由，推荐加上这个
  },
  mode: 'development', // 或者 'development'
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
