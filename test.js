
const http = require('http');
const express = require("express");
const socketIo = require("socket.io");

// App setup
const PORT = process.env.PORT || 8050;
const app = express();




app.get('/', (req, res) => {
  res.send('Hello socket io/!')
})


const server = http.Server(app)
server.listen(PORT)


const io = socketIo(server);

io.on("connection", function (socket) {

  console.log(" connection request");

  socket.emit('hello',{
    greeting:'hello zaid'
  })
  console.log("Made socket connection");
});


// var WebSocket = require('ws');

// var port = process.env.PORT || 3000;

// var serverio = new WebSocket.Server(
//   {
//     port: port,
//   }
// )

// let msg = "Server: Welcome!";

// serverio.on('connection', function connection(client) {
//   client.send(msg);
//   client.on('message', function incoming(message) {
//     msg = message;
//     for(var cl of serverio.clients) {
//       cl.send(message);
//     }
//     console.log("Received the following message:\n" + message);
//   });
// });




// Socket setup
