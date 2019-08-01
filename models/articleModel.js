const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Article = new Schema({
    title: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    link: {
        type: String,
        required: true
    },
    isFavorite: {
        type: Boolean,
        required: true
    },
    // byline: {
    //     type: String,
    //     required: true
    // },
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