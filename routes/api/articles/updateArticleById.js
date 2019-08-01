let Article = require('../../../models/articleModel');

module.exports = (req, res) => {
    Article
    .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then(dbArticle => res.json(dbArticle))
    .catch(err => res.json(err))
}