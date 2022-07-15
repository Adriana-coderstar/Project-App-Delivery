const loginService = require('../services/loginService');

const login = async (req, res, _next) => {
  const { email, password } = req.body;
  try {
    const { code, message, userData } = await loginService.login(email, password);
    
    if (message) {
      return res.status(code).json({ message });
    }
    return res.status(code).json({ userData });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  login,  
};
