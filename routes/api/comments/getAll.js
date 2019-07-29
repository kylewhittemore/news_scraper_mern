let Comment = require('../../../models/commentModel');

module.exports = (req, res) => {
    Comment.find(function (err, comments) {
        if (err) {
            console.log(err)
        } else {
            res.json(comments)
        };
    });
};