const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        '@babel/polyfill',
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './src',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};