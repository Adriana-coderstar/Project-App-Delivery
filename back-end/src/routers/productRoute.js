const express = require('express');
const productController = require('../controllers/productController');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

const productRouter = express.Router();

productRouter.get('/customer/products', tokenMiddleware, productController.getProducts);

module.exports = productRouter;
