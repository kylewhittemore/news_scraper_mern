let Comment = require('../../../models/commentModel')

module.exports = (req, res) => {

    Comment.create(req.body)
    .then(function(dbComment){
        return Article.findOneandUpdate(
            { _id: req.params.id }, 
            { comment: dbComment._id }, 
            { new: true });
    })
    .then(dbArticle => res.json(dbArticle))
    .catch(err => res.json(err))
}
