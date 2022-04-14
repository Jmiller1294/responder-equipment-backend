const app = require('./app');
const http = require('http');

//create server and specify port
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

//function to start server
function startServer() {
  server.listen(PORT, () => {
    console.log(`listening on ${PORT}...`)
  })
}

startServer()


