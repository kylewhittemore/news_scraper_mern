var axios = require("axios");
var cheerio = require("cheerio");
const Article = require('../../models/articleModel')

module.exports = (req, res) => {
    res
        .status(200)
        .json({ message: "Scraper Endpoint, under construction!" })

    
}