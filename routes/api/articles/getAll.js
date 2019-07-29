let Article = require('../../../models');

module.exports = (req, res) => {
    Article.find(function (err, articles) {
        if (err) {
            console.log(err)
        } else {
            res.json(articles)
        };
    });
};