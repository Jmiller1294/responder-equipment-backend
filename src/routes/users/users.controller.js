const model = require('../../models/users.model');
const adminModel = require('../../models/admin.model');
const moderatorModel = require('../../models/moderators.model');

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
  const user = model.find(user => 
    user.email === req.body.data.email 
    && user.password === req.body.data.password
  ) 

  if(user) {
    res.send({ 
      loggedIn: true,
      user: user
    });
  }
  else {
    res.send(false);
  }
}

function httpLoginAdmin(req, res) {
  let admin = adminModel.find(admin => 
    admin.email === req.body.data.email
    && admin.password === req.body.data.password
  )
  if(admin) {
    res.send({ 
      loggedIn: true,
      admin: admin
    });
  }
  else {
    res.send(false);
  }
}

function httpLoginModerator(req, res) {
  let moderator = moderatorModel.find(moderator => 
    moderator.email === req.body.data.email
    && moderator.password === req.body.data.password
  )
  if(admin) {
    res.send({ 
      loggedIn: true,
      moderator: moderator
    });
  }
  else {
    res.send(false);
  }
}

module.exports = { 
  httpGetAllUsers,
  httpGetUserByID,
  httpGetUsersByOrg,
  httpLoginUser,
  httpLoginAdmin,
  httpLoginModerator
};

