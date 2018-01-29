const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry:{
    index: './src/index.js'
  },
  output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
  },
  plugins: [
        new CleanWebpackPlugin('dist')
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
        // new webpack.optimize.CommonsChunkPlugin({
        //     children: true,
        //     minChunks: Infinity,
        //     async: false
        // })
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: "vendor",
        //   minChunks: function(module){
        //     return module.context && module.context.includes("node_modules");
        //   }
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: "manifest",
        //   minChunks: Infinity
        // }),
    ]
};