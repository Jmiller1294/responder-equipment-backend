const model = require('../../models/fireProducts.model');

function httpGetAllFireProducts(req, res) {
  res.send(model);
}

function httpGetFireProductsByID(req, res) {
  const product = model.find(product => product.id === parseInt(req.params.id));
  res.send(product);
}


module.exports = { 
  httpGetAllFireProducts,
  httpGetFireProductsByID, 
};
