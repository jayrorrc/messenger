const express = require('express');
const { createMessage, getAllCause } = require('../controllers/message');
const message = express.Router();

message.post('/', createMessage);
message.get('/', getAllCause);

module.exports = message;