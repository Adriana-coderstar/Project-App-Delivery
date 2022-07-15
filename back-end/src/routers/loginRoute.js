const express = require('express');
const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middlewares/loginMiddleware');

const loginRouter = express.Router();

loginRouter.post('/login', loginMiddleware, loginController.login);

module.exports = loginRouter;
