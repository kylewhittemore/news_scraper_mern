const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comment = new Schema({
    header: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Comment', Comment)