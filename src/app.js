const express = require('express');
const app = express();
const usersRouter = require('./routes/users/users.router');

//json middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send("Hello World");
})

app.use('/users', usersRouter);


module.exports = app;
