const productService = require('../services/productService');

const getProducts = async (req, res) => {
  try {
    const { code, products } = await productService.getProducts();

    return res.status(code).json(products);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json(err.message);
  }
};

module.exports = {
  getProducts,
};