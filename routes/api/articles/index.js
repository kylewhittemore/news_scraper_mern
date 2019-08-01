const articles = require('express').Router();
const all = require('./getAll');
const getById = require('./getByID');
const updateById = require('./updateByID');

// Tested wroking
articles.get('/', all);

// Tested working
articles.get('/:id', getById)

// Tested Working
articles.post('/:id', updateById)

module.exports = articles;