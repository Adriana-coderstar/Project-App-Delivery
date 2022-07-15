const md5 = require('md5');
const { User } = require('../database/models');
const token = require('../utils/tokenGenerator');

const register = async (email, password, name) => {
  const secretPassword = md5(password);

  const userVerify = await User.findOne({ where: { email } });

  if (userVerify) {
    return { code: 409, message: 'Conflict' };
  }

  const createdUser = await User
    .create({ email, password: secretPassword, name, role: 'customer' });

  const { id } = createdUser;

  const jwtToken = token({ id, name }); 

  const userData = {
    name,
    email,
    role: 'customer',
    token: jwtToken,
  };

  return { code: 201, userData };
};

module.exports = {
  register,
};