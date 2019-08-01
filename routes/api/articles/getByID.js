let Article = require('../../../models/articleModel');

module.exports = (req, res) => {
    Article.findOne({_id: req.params.id})
    .populate("Comment")
    .then(dbArticle => res.json(dbArticle))
    .catch(err => res.json(err))
}