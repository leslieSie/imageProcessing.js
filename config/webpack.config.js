require("babel-polyfill");
let path = require('path');
let mainPath = path.join(__dirname, '../', 'src/index.js');

module.exports = {
    entry: ['babel-polyfill', mainPath], //唯一入口文件
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
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '../', "dist/main.js")
    }
}