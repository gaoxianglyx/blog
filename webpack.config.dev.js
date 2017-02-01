var webpack = require('webpack');

module.exports = {
    //页面入口文件配置
    entry: {
        './public/javascripts/index.js'
    },
    //入口文件输出配置
    output: {
        path:  __dirname +'/public/',
        publicPath: "/public/",
        filename: 'bundle.js'
    },
     module: {
        //webpack牛逼的加载器
        loaders: [
            { test: /\.js|\.jsx|\.es6$/, exclude: /node_modules/, loader: "react-hot!babel?presets[]=react,presets[]=es2015"}，
            { test: /\.css$/, loader:["style", "css"] },
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    },
    //其他处理方案
    resolve:{
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions:['','.js','.json']
    },
    devServer: {
        //设置热更新，更新形式为inline
        hot: true,
        inline: true
    },
    //插件项
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
};