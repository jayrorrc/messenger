const express = require('express');
const { sendMessage, getMessages } = require('../controllers/message');
const message = express.Router();

message.post('/send', sendMessage);
message.get('/', getMessages);

module.exports = message;