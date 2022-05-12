const express = require('express');
const cors = require('cors');
const app = express();
const usersRouter = require('./routes/users/users.router');
const fireProductsRouter = require('./routes/users/fireProducts.router');

//cors middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));

//json middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send("Hello World");
})

app.use('/users', usersRouter);
app.use('/fire-products', fireProductsRouter);

module.exports = app;
