module.exports = {
    entry: [
      './public/javascripts/index.js'
    ],
    output: {
        path: __dirname + '/public/',
        publicPath: "/public/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          { test: /\.js|\.jsx|\.es6$/, exclude: /node_modules/, loader: "babel?presets[]=react,presets[]=es2015"}
        ]
    }
};