const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        'index': path.resolve(__dirname, '../src/index.ts'),
        // 'polyfills': path.resolve(__dirname, '../src/polyfills.ts'),
        // 'vendor': path.resolve(__dirname, '../src/vendor.ts'),
        // 'vendor1': 'ng-zorro-antd',
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.[chunkhash:8].js',
        filename: './[name].bundle.[chunkhash:8].js'
    },

    devtool: _DEV_?'cheap-module-source-map':false,

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                include: [path.resolve(__dirname, '../src')],
                options: {
                    // configFile: 'tslint.json',
                    emitErrors: true,
                    fix: true
                }
            },
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular2-router-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false,
                    removeComments: false,
                    collapseWhitespace: false
                }
            },
            {
                test: /\.less$/,
                loaders: ['raw-loader', 'less-loader']
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ "css-loader", "less-loader", postCSSLoader ]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ "css-loader", postCSSLoader]
                })
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
                loader: "url-loader",
                options: {
                    name: "assets/[name]-[hash].[ext]",
                    limit: 2048
                }
            }
        ]
    },

    // plugins
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("../dist/vendor/polyfills.manifest.json")
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("../dist/vendor/vendor.manifest.json")
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("../dist/vendor/vendor1.manifest.json")
        }),
        new ExtractTextPlugin({ filename: "css/[name].[hash:6].css", allChunks: true }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['common'],
            // name: ['common', 'vendor1', 'vendor', 'polyfills'],
            minChunks: Infinity
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        // new webpack.optimize.LimitChunkCountPlugin({
        //     maxChunks: 5,
        //     minChunkSize: 1000
        // }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../src')
        )
    ]
};

module.exports = config;