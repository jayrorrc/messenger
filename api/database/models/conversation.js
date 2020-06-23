const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const conversationSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: {
        type: String,
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }],
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { timestamps: true });

module.exports = mongoose.model('Conversation', conversationSchema);;