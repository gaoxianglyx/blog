var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
    author: String,
    text: String
})
var Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment;