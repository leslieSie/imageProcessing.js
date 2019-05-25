// develop webpack config setting
// require("babel-polyfill");
let webpack = require('webpack');
let path = require('path');
let webpackMerge = require('webpack-merge');
let baseConfig = require('./webpack.base.config.js');
let devConfig = {
    mode: 'development',
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    devServer: {
        contentBase: path.join(__dirname, '../', "dist"),
        host: '127.0.0.1',
        port: 8080,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        compress: true,
        hot: true,
        inline: true,
    }
}
module.exports = webpackMerge(baseConfig, devConfig);