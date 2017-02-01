var mongoose = require('mongoose');
var TextSchema = new mongoose.Schema({
    title: String,
    contents: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        }
    }
})
var Text = mongoose.model('Text', TextSchema)

module.exports = Text;