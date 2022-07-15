const md5 = require('md5');
const { User } = require('../database/models');
const token = require('../utils/tokenGenerator');

const login = async (email, password) => {
  const secretPassword = md5(password);

  const userVerify = await User.findOne({ where: { email, password: secretPassword } });

  if (!userVerify) {
    return { code: 404, message: 'Not Found' };
  }

  const { id, name, role } = userVerify;

  const jwtToken = token({ id, name, role }); 

  const userData = {
    name: userVerify.name,
    id: userVerify.id,
    email: userVerify.email,
    role: userVerify.role,
    token: jwtToken,
  };

  return { code: 200, userData }; 
};

module.exports = {
  login,
};