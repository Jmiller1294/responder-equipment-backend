const model = require('../../models/users.model');

function httpgetAllUsers(req, res) {
  res.send(model);
}

module.exports = { httpgetAllUsers };
