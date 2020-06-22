const express = require('express');
const routes = express.Router();
const verifyToken = require('../../middleware/verifytoken');

routes.get('/', (req, res) => {
    res.send('We have an api!!!');
});

routes.use('/message', verifyToken, require('./message'));
routes.use('/user', require('./user'));


module.exports = routes;