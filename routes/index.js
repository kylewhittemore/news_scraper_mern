const routes = require('express').Router();

routes.get("/api", function (req, res) {
    res.status(200).json({ message: "connected!" });
});

const articles = require('./api/articles')
routes.use('/api/articles', articles)

const comments = require('./api/comments')
routes.use('/api/comments', comments)

module.exports = routes;