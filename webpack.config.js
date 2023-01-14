const path = require('path');
const htmlPlugin=require("html-webpack-plugin")
const cssPlugin=require("mini-css-extract-plugin")
const cssMinPlugin=require("css-minimizer-webpack-plugin")
const htmlMinPlugin=require("html-minimizer-webpack-plugin")
const jsMinPlugin=require("terser-webpack-plugin")
const ImageConfigWebpackPlugin = require('image-config-webpack-plugin');
module.exports = {
  mode:"production",
  entry: './src/entry_index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  optimization:{
    minimizer:[
      new cssMinPlugin(),
      new htmlMinPlugin(),
      new jsMinPlugin(),
      new ImageConfigWebpackPlugin(),
    ]
  },


  module: {
    rules: [
      {
        test: /\.css$/i,
        use:[cssPlugin.loader, "css-loader" ],
      },
    ],
  },
  plugins:[
    new htmlPlugin({
      template:"./index.html",
      filename:"home.html",
      inject:"body"
    }),
    new cssPlugin({
      filename:"home.css"
    })
  ],
  devServer:{
    compress:true,
    port:9000
  }
  ,
  
};