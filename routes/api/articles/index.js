const articles = require('express').Router();
const all = require('./getAll');

articles.get('/', all);

module.exports = articles;