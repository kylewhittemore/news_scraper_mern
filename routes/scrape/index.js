const scrape = require('express').Router();
const getHackerData = require('./hacker');

scrape.get('/hacker', getHackerData);

module.exports = scrape;