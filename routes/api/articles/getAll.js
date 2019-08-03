let Article = require('../../../models/articleModel');

module.exports = (req, res) => {
    Article.find({}).populate("comments").exec(function (err, articles) {
        if (err) {
            console.log(err)
        } else {
            res.json(articles)
        };
    });
    // Article.find(function (err, articles) {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         res.json(articles)
    //     };
    // });
};