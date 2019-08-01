let Article = require('../../../models/articleModel');
let Comment = require('../../../models/commentModel')

module.exports = (req, res) => {
    Comment.create(req.body)
        .then(dbComment => {
            return Article.findOneAndUpdate({ _id: req.params.id }, { $push: { comments: dbComment._id }}, { new: true })
        })
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.json(err))
}
