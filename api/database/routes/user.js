const express = require('express');
const { createUser, loginUser } = require('../controllers/user');
const verifyToken = require('../../middleware/verifytoken');
const user = express.Router();

user.post('/signup', createUser);
user.post('/login', loginUser);
user.post('/', verifyToken, createUser);

module.exports = user;