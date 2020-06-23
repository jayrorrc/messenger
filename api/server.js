'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/api', require('./database/routes/main'));

const mongoConfig = require('./mongo_config.json');
const mongoURL = 'mongodb://' + mongoConfig.url + ':' + mongoConfig.port + '/' + mongoConfig.database;
// set up mongoose
mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected');
}).catch((error) => {
    console.log('Error connecting to database');
});

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);