const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    body: {
        type: String,
        required: true
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    }
});

module.exports = mongoose.model('Comment', Comment)