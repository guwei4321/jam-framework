const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        jam: '../src/index.js'
    },
    output: {
        filename: 'jam.js',
        path: path.resolve(__dirname, '../dist')
    },
    externals: {
        "jquery": "jQuery",
        "$": "jQuery",
        "_": "underscore",
        "mustache": 'mustache'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", "css-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader'
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('../dist'),
        new webpack.optimize.UglifyJsPlugin({
            show_copyright: false,
            comments: false,
            compress: {
            warnings: false,
            drop_debugger: true,
                drop_console: true
            },
            ie8: true,
            ecma: 5,
            mangle: {
                except: ['$super']
            },
            sourceMap: false
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};