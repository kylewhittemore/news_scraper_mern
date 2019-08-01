const articles = require('express').Router();
const all = require('./getAll');
const getById = require('./getByID');
const addCommentById = require('./addCommentByID');
const updateArticleById = require('./updateArticleById');

// Tested wroking
articles.get('/', all);

// Tested working
articles.get('/:id', getById)

// Tested Working
articles.post('/:id', addCommentById)

articles.put('/:id', updateArticleById)

module.exports = articles;