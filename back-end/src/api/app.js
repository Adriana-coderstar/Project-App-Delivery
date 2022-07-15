const cors = require('cors');

const express = require('express');
const loginRouter = require('../routers/loginRoute');
const registerRouter = require('../routers/registerRoute');
const productRouter = require('../routers/productRoute');
const saleRouter = require('../routers/saleRoute');
const sellerRouter = require('../routers/sellerRoute');

const app = express();

app.use(express.json());
app.use(cors());

app.use(loginRouter);
app.use(registerRouter);
app.use(productRouter);
app.use(saleRouter);
app.use(sellerRouter);
app.use('/images', express.static('public/images'));
app.get('/coffee', (_req, res) => res.status(418).end());
module.exports = app;
