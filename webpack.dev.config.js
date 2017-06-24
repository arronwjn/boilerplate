var webpack = require('webpack');
var path = require('path');
const cssModulesPath = path.resolve(__dirname,'src/style');



const webpackDev ={
  devtool: 'source-map',//找到源代码错误
  entry:'./src/index.js',　　　//指定入口文件
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
  },
  devServer: {
        // contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        // colors: true,//在cmd终端中输出彩色日志
        // historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        // inline: true,//设置为true，当源文件改变时会自动刷新页面
        // port: 8080,//设置默认监听端口，如果省略，默认为"8080"
        // process: true,//显示合并代码进度
        host : '0.0.0.0'
    }
}


module.exports=webpackDev
