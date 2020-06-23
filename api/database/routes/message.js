const express = require('express');
const { sendMessage } = require('../controllers/message');
const message = express.Router();

message.post('/send', sendMessage);

module.exports = message;