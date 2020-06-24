const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowerCase: true,
    },
    password: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);;
