const express = require('express');
const saleController = require('../controllers/saleController');
const saleMiddleware = require('../middlewares/saleMiddleware');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

const saleRouter = express.Router();

saleRouter.get('/sale/:id', tokenMiddleware, saleController.getSale);
saleRouter.post('/sale', tokenMiddleware, saleMiddleware, saleController.createSale);
saleRouter.get('/sales', tokenMiddleware, saleController.getSales);
saleRouter.put('/sale/:id', saleController.updateSale);

module.exports = saleRouter;