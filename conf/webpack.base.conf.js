const path = require('path')
const webpack = require('webpack')
const styleLoaderConf = require('./styleLoaderConf')
const { AngularCompilerPlugin } = require('@ngtools/webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const _PROD_ = process.env.NODE_ENV === 'production';
const _DEV_ = process.env.NODE_ENV === 'development';

const postCSSLoader = {
  loader: "postcss-loader",
  options: {
    plugins: () => [
      require("autoprefixer")({
        browsers: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 8"]
      })
    ]
  }
};

const config = {
  entry: {
    // 'polyfills': path.resolve(__dirname, '../src/polyfills.ts'),
    // 'vendor': path.resolve(__dirname, '../src/vendor.ts'),
    // // 'vendor1': 'ng-zorro-antd',
    // 'app': path.resolve(__dirname, '../src/app.ts'),

    'index': path.resolve(__dirname, '../src/index.ts')
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    sourceMapFilename: '[name].map',
    filename: './[name].bundle.[hash].js',
    chunkFilename: '[id].chunk.[chunkhash:8].js'
  },

  devtool: _DEV_ ? '#cheap-module-source-map' : false,

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(process.cwd(), "src"), "node_modules"],
    alias: {
      '@app': path.join(process.cwd(), 'src/app'),
      '@assets': path.join(process.cwd(), 'src/assets'),
      '@components': path.join(process.cwd(), 'src/components'),
      '@utils': path.join(process.cwd(), 'src/utils'),
    }
  },

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
        test: /\.ts$/,
        // loader: '@ngtools/webpack'
        use: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular-router-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        // options: {
        //   // minimize: false,
        //   // removeComments: false,
        //   // collapseWhitespace: false
        // }
      },
      ...styleLoaderConf,
      // {
      //   test: /\.less$/,
      //   // loaders: ['raw-loader', 'less-loader']
      //   use: [MiniCssExtractPlugin.loader, 'raw-loader', 'less-loader']
      // },
      // {
      //   test: /\.less$/,
      //   // use: ExtractTextPlugin.extract({
      //   //   fallback: "style-loader",
      //   //   use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader", postCSSLoader ]
      //   // })
      //   use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader", postCSSLoader]
      // },
      // {
      //   test: /\.css$/,
      //   // use: ExtractTextPlugin.extract({
      //   //   fallback: "style-loader",
      //   //   use: [MiniCssExtractPlugin.loader, "css-loader", postCSSLoader]
      //   // })
      //   use: [MiniCssExtractPlugin.loader, "css-loader", postCSSLoader]
      // },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
        loader: "url-loader",
        options: {
          name: "assets/[name]-[hash:8].[ext]",
          limit: 2048
        }
      }
    ]
  },

  optimization: {
    minimize: !_PROD_ ? false : true,
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        // styles: {
        //   name: 'styles',
        //   test: /\.css$/,
        //   minChunks: 1,
        //   reuseExistingChunk: true,
        //   enforce: true,
        // },
        vendors: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: "initial"
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  // plugins
  plugins: [
    // new AngularCompilerPlugin({
    //   tsConfigPath: path.resolve(__dirname, '../tsconfig.json'),
    //   entryModule: path.resolve(__dirname, '../src/app/app.module#AppModule'),
    //   skipCodeGeneration: false,
    //   sourceMap: _DEV_ ? true : false
    // }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash].css",
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.ContextReplacementPlugin(
    //     /angular(\\|\/)core(\\|\/)@angular/,
    //     path.resolve(__dirname, '../src')
    // ),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(_DEV_ ? "development" : "production")
      },
      _DEV_: JSON.stringify(_DEV_),
    })
  ]
};

module.exports = config;