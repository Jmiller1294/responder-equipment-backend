const express = require('express');
const usersController = require('./users.controller');
const usersRouter = express.Router();

//user routes
usersRouter.get('/', usersController.httpGetAllUsers);
usersRouter.get('/:id', usersController.httpGetUser);
usersRouter.post('/', )

module.exports = usersRouter; 