const articles = require('express').Router();
const all = require('./getAll');
const add = require('./add')
const getById = require('./getByID')

articles.get('/', all);
articles.post('/', add)
articles.get('/:id', getById)

module.exports = articles;