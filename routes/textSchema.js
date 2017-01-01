var mongoose = require('mongoose');
var TextSchema = new mongoose.Schema({
    title: String,
    contents: String
})
var Text = mongoose.model('Text', TextSchema)

module.exports = Text;