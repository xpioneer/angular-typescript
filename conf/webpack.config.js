const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const styleLoaderConf = require('./styleLoaderConf')
const { AngularWebpackPlugin } = require('@ngtools/webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const _PROD_ = process.env.NODE_ENV === 'production';
const _DEV_ = process.env.NODE_ENV === 'development';

function resolveCwd(dir = 'src') {
  return path.resolve(process.cwd(), dir)
}

const config = {
  entry: {
    'app': resolveCwd('src/index.ts')
  },

  output: {
    clean: true,
    path: resolveCwd('dist'),
    publicPath: '/',
    sourceMapFilename: '[name].map',
    filename: 'static/js/[name].bundle.[contenthash:8].js',
    chunkFilename: 'static/js/[name].chunk.[chunkhash:8].js',
    assetModuleFilename: 'static/assets/[hash][ext][query]',
  },

  devtool: false, //_PROD_ ? false : '#cheap-module-source-map',

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [resolveCwd(), "node_modules"],
    alias: {
      '@': resolveCwd(),
      '@app': resolveCwd('src/app'),
      '@assets': resolveCwd('src/assets'),
      '@components': resolveCwd('src/components'),
      '@utils': resolveCwd('src/utils'),
    }
  },
  context: __dirname, // string（绝对路径！）
  // webpack 的主目录
  // entry 和 module.rules.loader 选项
  // 相对于此目录解析

  target: "web", // default
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   enforce: 'pre',
      //   loader: 'tslint-loader',
      //   include: [path.resolve(__dirname, '../src')],
      //   options: {
      //     // configFile: 'tslint.json',
      //     emitErrors: true,
      //     fix: true
      //   }
      // },
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        use: '@ngtools/webpack',
        exclude: /node_modules/,
        // test: /\.ts$/,
        // use: [
        //   'awesome-typescript-loader',
        //   'angular2-template-loader'
        // ]
      },
      // {
      //   test: /\.(t|j)s$/,
      //   loader: 'angular-router-loader'
      // },
      {
        test: /\.html$/,
        use: 'html-loader'
        // options: {
        //   // minimize: false,
        //   // removeComments: false,
        //   // collapseWhitespace: false
        // }
      },
      ...styleLoaderConf,
      // {
      //   test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
      //   loader: "asset",
      //   options: {
      //     name: "assets/[name]-[hash:8].[ext]",
      //     limit: 2048
      //   }
      // }
      {
        test: /\.(eot|woff|woff2|ttf|mp4|webm)(\?\S*)?$/,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpe?g|gif)(\?\S*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4 KB
          },
        },
      },
      {
        test: /\.(svg|xml)$/,
        type: 'asset/source'
      },
    ]
  },

  optimization: {
    minimize: _PROD_ ? true : false,
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      // name: true,
      cacheGroups: {
        'polyfill': {
          name: 'polyfills',
          test: /[\\/]node_modules[\\/](core-js|zone\.js|rxjs)/,
          priority: 20,
          chunks: 'all'
        },
        'angular': {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]@angular/,
          priority: 20,
          chunks: 'all'
        },
        // 'ng-zorro-antd': {
        //   name: 'vendor1',
        //   test: /[\\/]node_modules[\\/]ng-zorro-antd/,
        //   priority: 20,
        //   chunks: 'all'
        // },
        'quill': {
          name: 'quill',
          test: /[\\/]node_modules[\\/]quill[\\/]/,
          priority: 15,
          chunks: 'all'
        },
        'echart': {
          name: 'echarts',
          test: /[\\/]node_modules[\\/]echarts[\\/]/,
          priority: 15,
          chunks: 'all'
        },
        'common': {
          name: 'commons',
          priority: 10,
          chunks: 'all',
          minChunks: 2
        },
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true
        // }
      }
    }
  },

  // plugins
  plugins: [
    new AngularWebpackPlugin({
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
      jitMode: true,
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash].css",
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(_DEV_ ? "development" : "production")
      },
      _DEV_: JSON.stringify(_DEV_),
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: resolveCwd('static'),
        globOptions: {
          ignore: ['.*']
        }
      }]
    }),
  ]
};

module.exports = config;