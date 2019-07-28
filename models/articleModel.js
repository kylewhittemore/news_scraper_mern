const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Article = new Schema({
    article_title: {
        type: String,
        required: true
    },
    article_summary: {
        type: String,
        required: true
    },
    article_URL: {
        type: String,
        required: true
    },
    article_byline: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Article', Article)