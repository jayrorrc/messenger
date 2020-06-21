'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

const mongoConfig = require('./mongo_config.json');
// set up mongoose
mongoose.connect('mongodb://' + mongoConfig.url + ':' + mongoConfig.port + '/' + mongoConfig.database)
    .then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.log('Error connecting to database');
    });

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
app.get('/', (req, res) => {
    res.send('We have an api!!!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);