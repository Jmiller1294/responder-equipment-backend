const model = require('../../models/users.model');

function httpGetAllUsers(req, res) {
  res.send(model);
}

function httpGetUser(req, res) {
  const user = model.find(user => user.id === parseInt(req.params.id));
  res.send(user);
}

module.exports = { 
  httpGetAllUsers,
  httpGetUser
};
