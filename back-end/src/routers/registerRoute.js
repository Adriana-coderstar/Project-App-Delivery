const express = require('express');
const registerController = require('../controllers/registerController');
const registerMiddleware = require('../middlewares/registerMiddleware');

const registerRouter = express.Router();

registerRouter.post('/register', registerMiddleware, registerController.register);

module.exports = registerRouter;