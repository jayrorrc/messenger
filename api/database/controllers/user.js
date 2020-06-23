const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Token = require('../../middleware/token');

function createUser(req, res, next) {
    bcrypt.hash(req.body.password, 15, (err, hash) => {
        const password = hash;
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            username: req.body.username,
            password,
        });
        // check that user submits the required value
        if (!user.username || !user.password) {
            return res.status(400).json({
                message: 'Please ensure you fill the username, and password',
            });
        }
        // verify the user isn't stored in the database
        return User.count({
            $or: [
                { username: req.body.username },
            ],
        })
            .then((count) => {
                if (count > 0) {
                    res.status(401).json({
                        message: 'This user exists',
                    });
                }
                // if user doesn't exist, create one
                return user
                    .save()
                    .then((newUser) => {
                        const token = Token(newUser);
                        res.status(201).json({
                            message: 'User signup successfully',
                            user: {
                                username: newUser.username,
                                _id: newUser.id
                            },
                            token,
                        });
                    })
                    .catch(() => {
                        res.status(500).json({
                            message: 'Our server is in the locker room, please do try again.'
                        });
                    });
            });
    });
}

function loginUser(req, res) {
    const { username, password } = req.body;

    console.log('username', username);

    User.findOne({ username: username })
        .then((existingUser) => {
            bcrypt.compare(password, existingUser.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Not authorized',
                    });
                }
                if (result) {
                    const token = Token(existingUser);
                    return res.status(200).json({
                        message: 'User authorization successful',
                        user: {
                            username: existingUser.username,
                            _id: existingUser.id,
                        },
                        token,
                    });
                }
                return res.status(401).json({
                    message: 'Invalid details',
                });
            });
        })
        .catch((err) => {
            res.status(500).json({ message: 'Our server is in the locker room, please do try again.' })
        });
}

module.exports = {
    createUser,
    loginUser
};