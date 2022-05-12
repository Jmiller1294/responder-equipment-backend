const model = require('../../models/users.model');

function httpGetAllUsers(req, res) {
  res.send(model);
}

function httpGetUserByID(req, res) {
  const user = model.find(user => user.id === parseInt(req.params.id));
  res.send(user);
}

function httpGetUsersByOrg(req, res) {
  const users = model.filter(user => user.organizations === req.params.name);
  res.send(users);
}

function httpLoginUser(req, res) {
  
}

module.exports = { 
  httpGetAllUsers,
  httpGetUserByID,
  httpGetUsersByOrg,
  httpLoginUser
};

