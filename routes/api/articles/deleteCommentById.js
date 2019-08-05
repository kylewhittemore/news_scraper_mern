let Comment = require('../../../models/commentModel');

module.exports = (req, res) => {
    Comment.findOneAndDelete({_id: req.params.id})
    .then(dbComment => res.json(dbComment))
    .catch(err => res.json(err))
}