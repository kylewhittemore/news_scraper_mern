const routes = require('express').Router();

routes.get("/api", function (req, res) {
    res.status(200).json({ message: "connected!" });
});

const articles = require('./api/articles')
routes.use('/api/articles', articles)

const scrape = require('./scrape')
routes.use('/scrape', scrape)

module.exports = routes;