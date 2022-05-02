const express = require('express');
const app = express();
const usersRouter = require('./routes/users/users.router');
const fireProductsRouter = require('./routes/users/fireProducts.router');

//json middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send("Hello World");
})

app.use('/users', usersRouter);
app.use('/fire-products', fireProductsRouter);

module.exports = app;
