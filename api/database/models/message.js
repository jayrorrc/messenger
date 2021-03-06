const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const messageSchema = new Schema({
    _id: Schema.Types.ObjectId,
    text: {
        type: String,
        required: true,
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);;