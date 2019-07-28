const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = 4000;

app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper_stash";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});

app.use('/', routes);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});