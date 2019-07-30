let Article = require('../../../models/articleModel')

module.exports = (req, res) => {
    let newArticle = new Article(req.body);
    newArticle.save()
        .then(article => {
            res.status(200).json({ 'Article': 'Article added successfully' });

        })
        .catch(err => {
            res.status(400).send('adding a new Article failed')
        });

}