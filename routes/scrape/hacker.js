const $ = require("cheerio");
const Article = require('../../models/articleModel');
const puppeteer = require('puppeteer');

module.exports = (req, res) => {

    const url = 'https://hackernoon.com';

    async function popDB() {

        await puppeteer
            .launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
            .then(function (browser) {
                return browser.newPage();
            })
            .then(function (page) {
                return page.goto(url).then(function () {
                    return page.content();
                });
            })
            .then(function (html) {

                $('.excerpt', html).each(function () {
                    let result = {};

                    result.title = $(this).children('.title').text();
                    result.link = "https://hackernoon.com" + $(this).children('.title').children('a').attr('href');
                    result.isFavorite = false;
                    result.isDeleted = false;
                    Article.create(result)
                        .then(function (dbArticle) {
                            // console.log(dbArticle);
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                })
            })

        return "db populated"
    }
    popDB()
        .then(function (message) {
            res.send(message)
        })
        .catch(function (err) {
            console.log(err)
        });
}



