const express = require('express');
const { createUser, loginUser, getUsers } = require('../controllers/user');
const verifyToken = require('../../middleware/verifytoken');
const user = express.Router();

user.post('/signup', createUser);
user.post('/login', loginUser);
user.get('/', verifyToken, getUsers);

module.exports = user;