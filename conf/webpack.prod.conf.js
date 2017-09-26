const path = require('path'),
    webpack = require('webpack'),
    UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
    config = require('./webpack.base.conf.js'),
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
    new CleanWebpackPlugin(
        ['dist/*'],　 //匹配删除的文件
        {
            root: path.join(__dirname, '../'),       　　　　　　　　　　//根目录
            verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
            dry:      false        　　　　　　　　　　//启用删除文件
        }
    )
]);

module.exports = config;