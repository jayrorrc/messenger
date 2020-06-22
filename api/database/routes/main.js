const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('We have an api!!!');
});

routes.use('/message', require('./message'));

module.exports = routes;