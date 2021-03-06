
const http = require('http');
const express = require("express");
// const socketIo = require("socket.io");

// App setup
const PORT = process.env.PORT || 8050;
const app = express();




app.get('/', (req, res) => {
  res.send('Hello socket io/!')
})


const server = http.Server(app)
server.listen(PORT)
