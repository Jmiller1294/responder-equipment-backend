const app = require('./app');
const http = require('http');

//create server 
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

function startServer() {
  server.listen(PORT, () => {
    console.log(`listening on ${PORT}...`)
  })
}

startServer()

let users = [
  {
    id: 1,
    name: 'justin',
  },
  {
    id: 2,
    name: 'Gabriel',
    age: 20
  }
]

users.map(user => console.log(user.name));
