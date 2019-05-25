let webpack = require('webpack');
let path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const mainPath = path.join(__dirname, '../', 'src/index.js');

module.exports = {
    entry: [mainPath], //唯一入口文件
    output: {
        path: path.join(__dirname, '../', 'dist'), //打包后的文件存放的地方
        filename: "main.js" //打包后输出文件的文件名
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../', "dist/index.html"),
            inject: 'head'
        }),
    ]
}