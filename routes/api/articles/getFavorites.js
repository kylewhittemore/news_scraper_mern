let Article = require('../../../models/articleModel');

module.exports = (req, res) => {
    Article.find({ isFavorite: true }, function(err, articles) {
        if (err) {
            console.log(err)
        } else {
            res.json(articles)
        };
    })
}
