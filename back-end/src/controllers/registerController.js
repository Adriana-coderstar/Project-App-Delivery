const registerService = require('../services/registerService');

const register = async (req, res, _next) => {
  const { email, password, name } = req.body;
  try {
    const { code, message, userData } = await registerService.register(email, password, name); 
    if (message) { return res.status(code).json({ message }); }
    return res.status(code).json(userData);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
module.exports = {
 register,  
};