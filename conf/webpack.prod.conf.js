const path = require('path'),
    webpack = require('webpack'),
    UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
    config = require('./webpack.base.conf.js'),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CleanWebpackPlugin = require('clean-webpack-plugin');


config.plugins = (config.plugins || []).concat([
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
    new webpack.NamedModulesPlugin(),
    // new CleanWebpackPlugin(
    //     ['dist/*'],　 //匹配删除的文件
    //     {
    //         root: path.join(__dirname, '../'),
    //         verbose:  true,
    //         dry:      false
    //     }
    // ),
    new HtmlWebpackPlugin({
        title: 'CMS-Angular4',
        filename: 'index.html',
        template: 'src/template/index_base.html',
    })
]);

module.exports = config;