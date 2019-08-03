let Article = require('../../../models/articleModel');

module.exports = (req, res) => {
    Article.deleteOne({_id: req.params.id})
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.json(err))
}