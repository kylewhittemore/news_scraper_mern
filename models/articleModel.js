const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Article = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    URL: {
        type: String,
        required: true
    },
    byline: {
        type: String,
        required: true
    },
    comments: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Note model
          ref: "Coment"
        }
      ]
});

module.exports = mongoose.model('Article', Article)