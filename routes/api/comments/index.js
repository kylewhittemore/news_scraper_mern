const comments = require('express').Router();
const getAll = require('./getAll');
const postToArticle = require('./postToArticle');

comments.get('/', getAll);
comments.post('/', postToArticle)

module.exports = comments;