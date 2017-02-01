var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
    author: String,
    text: String,
    TextId: String
})
var Comments = mongoose.model('Comments', CommentSchema)

module.exports = Comments;