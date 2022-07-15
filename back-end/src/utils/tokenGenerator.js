const jwt = require('jsonwebtoken');
const fs = require('fs');

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const token = (data = {}) => jwt.sign({ data }, secret, jwtConfig);

module.exports = token;
