const path = require('path'),
    webpack = require('webpack'),
    UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
    config = require('./webpack.base.conf.js');


config.plugins = (config.plugins || []).concat([
    new UglifyJSPlugin({
        output: {
            comments: false,
            beautify: false,
        },
        compress: true,
        warnings: false
    })
]);

module.exports = config;