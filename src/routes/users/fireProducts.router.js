const express = require('express');
const fireProductsController = require('./fireProducts.controller');
const fireProductsRouter = express.Router();


fireProductsRouter.get('/', fireProductsController.httpGetAllFireProducts);
fireProductsRouter.get('/:id', fireProductsController.httpGetFireProductsByID);


module.exports = fireProductsRouter; 


