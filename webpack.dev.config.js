var webpack = require('webpack');
var path = require('path');
const cssModulesPath = path.resolve(__dirname,'src/style');



const webpackDev ={
  devtool: 'source-map',//找到源代码错误
  entry:'./index.js',　　　//指定入口文件
  output:{
    path:'/build',　　　　　　//出口文件所在文件夹
    filename:'bundle.js',　　//出口文件
    publicPath: '/build/'  //公共路径
  },
  resolve:{                   //解决文件后缀省略
    extensions: [".js",".css",".jpg",".png"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,　　　　//编译.js文件
        exclude: /node_modules/,
        loader: "babel-loader"  //用babel-loader包编译
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      },
      {
        test:/\.(jpe?g|png)$/,
        loader: 'file-loader'
      }
    ]
  }
}


module.exports=webpackDev
