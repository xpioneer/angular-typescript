const path = require('path'),
    webpack = require('webpack'),
    UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: {
        polyfills: [path.resolve(__dirname, '../src/polyfills.ts')],
        vendor: [path.resolve(__dirname, '../src/vendor.ts')],
        vendor1: ['ng-zorro-antd'],
    },

    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[chunkhash].dll.js",
        library: "[name]_[chunkhash]"
    },

    // plugins
    plugins: [
        new UglifyJSPlugin({
            output: {
                comments: false,
                beautify: false,
            },
            compress: {
                drop_console: true,
            },
            warnings: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor1', 'vendor', 'polyfills'],
        }),
        new webpack.DllPlugin({
            context: __dirname,
            name: "[name]_[chunkhash]",
            path: path.resolve(__dirname, "../dist/[name].manifest.json")
        }),
        new HtmlWebpackPlugin({
            title: 'CMS-Angular4',
            filename: 'index.html',
            template: 'src/template/index_base.html',
            // filename: 'index.html',
            // template: 'src/index.html',
        }),
        // new webpack.ContextReplacementPlugin(
        //     /angular(\\|\/)core(\\|\/)@angular/,
        //     path.resolve(__dirname, '../src')
        // )
    ]
};

module.exports = config;