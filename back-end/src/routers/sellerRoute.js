const express = require('express');
const sellerController = require('../controllers/sellerController');

const sellerRouter = express.Router();

sellerRouter.get('/seller', sellerController.getAllSellers);

module.exports = sellerRouter;