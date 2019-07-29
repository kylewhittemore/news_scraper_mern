let Comment = require('../../../models/commentModel')

module.exports = (req, res) => {
    let newComment = new Comment(req.body);
    newComment.save()
        .then(comment => {
            res.status(200).json({ 'comment': 'comment added successfully' });

        })
        .catch(err => {
            res.status(400).send('adding a new comment failed')
        });

}
