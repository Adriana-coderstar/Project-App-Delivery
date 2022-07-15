const jwt = require('jsonwebtoken');
const fs = require('fs');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

    const decode = jwt.verify(token, secret);

    req.tokenData = decode.data;

    next();
  } catch (error) {
    if (error.name.includes('Token')) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    return res.status(500).json({ message: error.message });
  }
};