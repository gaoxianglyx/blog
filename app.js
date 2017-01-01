var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var comment = require('./routes/comment');
var text = require('./routes/text');

var app = express();

// view engine setup
var engine = require('consolidate');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', engine.mustache);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 对所有(/)URL或路由返回index.html 
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/comments', comment.list);
app.get('/comments/:id', comment.get);  
app.delete('/comments/:id', comment.delete,comment.list);  
app.post('/comments', comment.add,comment.list);  
app.put('/comments/:id', comment.update);  
app.post('/SendText', text.add);  

// 启动一个服务，监听从8888端口进入的所有连接请求
var server = app.listen(8888, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('mongod --dbpath  C:\Users\12510\Desktop\case\express+webpack\commentbox\public\data   Listening at http://%s:%s', host, port);
}); 

module.exports = app;
