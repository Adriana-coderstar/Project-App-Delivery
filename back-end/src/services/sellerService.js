const { User } = require('../database/models');

const getSellers = async () => {
  const sellers = await User.findAll({ 
    where: { role: 'seller' },
    attributes: { exclude: ['email', 'password', 'role'] },
});

  return ({ code: 200, sellers });
};

module.exports = {
  getSellers,
};