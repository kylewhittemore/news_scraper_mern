const articles = require('express').Router();
const all = require('./getAll');
const add = require('./add')

articles.get('/', all);
articles.post('/', add)
module.exports = articles;