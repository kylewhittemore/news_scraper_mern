const scrape = require('express').Router();
const getMediumData = require('./medium');

scrape.get('/', getMediumData);

module.exports = scrape;