const loginSchema = require('../schemas/loginSchema');

module.exports = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  return next();
};