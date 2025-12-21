// index.js
require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const socketIO = require("./src/socket");
const { Server } = require("socket.io");

// HTTP server wrapper
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.REACT_APP_WEB_URI,
    credentials: true,
  },
});

socketIO(io);

// Start server
const port = process.env.PORT || 9000;
server.listen(port, () => {
  console.log("Listening to port " + port);
});
