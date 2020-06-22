const mongoose = require('mongoose');
const Message = require('../models/message');
const conversation = require('../models/conversation');

// create new message
async function createMessage(req, res, next) {
    const message = new Message({
        _id: mongoose.Types.ObjectId(),
        text: req.body.text
    });
    return await message
        .save()
        .then((newMessage) => {
            return res.status(201).json({
                success: true,
                message: 'New message created successfully',
                Message: newMessage,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
}

function getAllCause(req, res, next) {
    Message.find()
        .select('_id text')
        .then((allCause) => {
            return res.status(200).json({
                success: true,
                message: 'A list of all causes',
                Messages: allCause,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        });
}

module.exports = {
    createMessage,
    getAllCause
};