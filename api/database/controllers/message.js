const mongoose = require('mongoose');
const Message = require('../models/message');
const Conversation = require('../models/conversation');
const User = require('../models/user');
const message = require('../routes/message');


async function _getMessages(messageIDs) {

    let messages = await Message.find({ _id: { '$in': messageIDs } })
        .populate('from')
        .sort({ 'createdAt': -1 })
        .limit(50);

    messages = messages.map((message) => {

        let msg = {
            text: message.text,
            from: message.from.username,
            createdAt: message.createdAt
        }

        return msg;
    }).reverse();

    return messages;
}

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

    await conversation.save();

    messages = await _getMessages(conversation.messages);

    return res.status(200).json({ messages });
}

async function getMessages(req, res, next) {
    let users = [req.query.from, req.query.to];
    let messages = [];
    let conversation = await Conversation.findOne({ users });

    if (conversation) {
        messages = await _getMessages(conversation.messages);
    }

    return res.status(200).json({ messages });
}

module.exports = {
    sendMessage,
    getMessages
};