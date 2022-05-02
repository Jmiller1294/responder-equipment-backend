const express = require('express');
const usersController = require('./users.controller');
const usersRouter = express.Router();

//user routes
usersRouter.get('/', usersController.httpGetAllUsers);
usersRouter.get('/:id', usersController.httpGetUserByID);
usersRouter.get('/organizations/:name', usersController.httpGetUsersByOrg);

module.exports = usersRouter; 