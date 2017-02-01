var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017/comments')
var Text = require('./textSchema.js');

exports.list = function(req, res){  
  Text.find(function(err, text) {
    res.json(text);  
  })
};

exports.content = function(req, res){
  Text.find({_id: req.params.TextId}, function(err, text){
    if(err){console.log(err)};
    res.json(text);
  }) 
};  

exports.add = function(req, res, next){  
  if(!req.body.title || 
     !req.body.contents) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  } 
 
  var newText = {
    title : req.body.title,
    contents : req.body.contents
  }; 
  var NewText = new Text(newText);
  NewText.save(function(err){
    res.send({status:"1"});
  }); 
};