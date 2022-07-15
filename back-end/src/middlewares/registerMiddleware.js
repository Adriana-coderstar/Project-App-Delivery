const registerSchema = require('../schemas/registerSchema');

module.exports = (req, res, next) => {
  const { error } = registerSchema.validate(req.body);
  
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  return next();
};