const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comment = new Schema({
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Comment', Comment)