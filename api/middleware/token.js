const jwt = require('jsonwebtoken');

const authConfig = require('../auth_config.json');
const key = authConfig.key

const Token = ({ id }) => jwt.sign(
    { id },
    key,
    { expiresIn: '2h' },
);
module.exports = Token;