const mongoose = require('mongoose');
const Message = require('../models/message');
const Conversation = require('../models/conversation');

// create new message
async function sendMessage(req, res, next) {
    let message = new Message({
        _id: mongoose.Types.ObjectId(),
        text: req.body.text,
        from: req.body.from
    });

    message = await message.save();

    let users = [req.body.from, req.body.to];
    let conversation = await Conversation.findOne({ users });

    if (!conversation) {
        conversation = new Conversation({
            _id: mongoose.Types.ObjectId(),
            users,
            messages: [message]
        })
    } else {
        conversation.messages.push(message);
    }

    conversation = await conversation.save();

    return res.status(200).json({ conversation });
}

module.exports = {
    sendMessage
};