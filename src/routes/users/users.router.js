const express = require('express');
const usersController = require('./users.controller');
const usersRouter = express.Router();

//user routes
usersRouter.get('/', usersController.httpGetAllUsers);
usersRouter.get('/:id', usersController.httpGetUserByID);
usersRouter.get('/organizations/:name', usersController.httpGetUsersByOrg);
usersRouter.post('/login', usersController.httpLoginUser);
usersRouter.post('/admin-login', usersController.httpLoginAdmin);
usersRouter.post('/moderator-login', usersController.httpLoginModerator);

module.exports = usersRouter; 