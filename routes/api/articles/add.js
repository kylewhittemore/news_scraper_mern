let Article = require('../../../models/articleModel')

module.exports = (req, res) => {
    Article.create(req.body)
        .then(article => {
            res.status(200).json(article);

        })
        .catch(err => {
            res.status(400).send(err)
        });

}