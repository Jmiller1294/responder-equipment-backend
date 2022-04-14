const express = require('express');
const usersController = require('./users.controller');
const usersRouter = express.Router();

//user routes
usersRouter.get('/', usersController.httpgetAllUsers);

module.exports = usersRouter;