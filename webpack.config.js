const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');

module.exports = {
  entry:{
    jam: './src/index.js'
  },
  output: {
      filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
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
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false,
              comparisons: false
          },
          ecma: 5,
          mangle: false,
          output: {
          },
          sourceMap: true
      }),
    //   new webpack.optimize.CommonsChunkPlugin({
    //       name: 'manifest',
    //       chunks: ['vendor']
    //   })
        new CleanWebpackPlugin('dist'),
      new webpack.optimize.ModuleConcatenationPlugin(),
        // new uglify
//         // new webpack.optimize.CommonsChunkPlugin({
//         //     children: true,
//         //     minChunks: Infinity,
//         //     async: false
//         // })
//         // new webpack.optimize.CommonsChunkPlugin({
//         //   name: "vendor",
//         //   minChunks: function(module){
//         //     return module.context && module.context.includes("node_modules");
//         //   }
//         // }),
//         // new webpack.optimize.CommonsChunkPlugin({
//         //   name: "manifest",
//         //   minChunks: Infinity
//         // }),
    ]
};