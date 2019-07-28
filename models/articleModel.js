const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Article = new Schema({
    article_title: {
        type: String
    },
    article_summary: {
        type: String
    },
    article_URL: {
        type: String
    },
    article_byline: {
        type: String
    },
    article_comments: {

    }
});

module.exports = mongoose.model('Article', Article)