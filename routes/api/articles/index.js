const articles = require('express').Router();
const all = require('./getAll');
const getById = require('./getByID');
const addCommentById = require('./addCommentByID');
const updateArticleById = require('./updateArticleById');
const getFavorites = require('./getFavorites');

// Tested wroking
// Get all articles
articles.get('/', all);

// Tested working
// Get only the favorites
articles.get('/favs', getFavorites);

// Tested working
// Get an article by its ID, populate with comments
articles.get('/:id', getById);

// Tested Working
// Post a comment to an article yb the article ID
articles.post('/:id', addCommentById);

// Tested working
// Generic route for updating a, article, used for setting it as a favorite
articles.put('/:id', updateArticleById);


module.exports = articles;