const { Product } = require('../database/models');

const getProducts = async () => {
  const products = await Product.findAll();

  return { code: 200, products };
};

module.exports = {
  getProducts,
};