const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: is where webpack will start the bundling, this is the file where it will start looking
    // for all the dependecies which it should budle together
    entry: './src/js/index.js',
    // output: where the budle will be saved
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    // mode: can be 'development' or 'production'
    // production prepare bunndle to production with minification, etc
    // can do in npm script
    // mode: 'development'

    // devServer: create a local server and watch it
    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
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
