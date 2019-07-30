// const axios = require("axios");
const $ = require("cheerio");
const Article = require('../../models/articleModel');
const puppeteer = require('puppeteer');

module.exports = (req, res) => {

    const url = 'https://hackernoon.com';

    puppeteer
        .launch()
        .then(function (browser) {
            return browser.newPage();
        })
        .then(function (page) {
            return page.goto(url).then(function () {
                return page.content();
            });
        })
        .then(function (html) {
            // console.log(html);
            $('.excerpt', html).each(function () {
                let result = {};
                
                result.title = $(this).children('.title').text();
                result.link = "https://hackernoon.com" + $(this).children('.title').children('a').attr('href');
                // console.log(result)

                // Create a new Article using the `result` object built from scraping
                Article.create(result)
                    .then(function (dbArticle) {
                        // View the added result in the console
                        console.log(dbArticle);
                        // res.send("Scrape Complete");
                    })
                    .catch(function (err) {
                        // If an error occurred, log it
                        console.log(err);
                    });
            })

        })
        .then(res.send("Scraped!"))
        .catch(function (err) {
            console.log(err)
        });
    // Send a message to the client
    // res.send("Scrape Complete");

}
