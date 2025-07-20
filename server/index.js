require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const messageRoutes = require("./routes/message.routes");
const cookieParser = require("cookie-parser");
const http = require("http");
const { Server } = require("socket.io");
const Message = require("./models/message.model");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.REACT_APP_WEB_URI,
    credentials: true,
  },
});

connectToDb();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.REACT_APP_WEB_URI,
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

const connectedusers = {};

io.on("connection", (socket) => {
  console.log("Client connected: ", socket.id);

  socket.on("register-user", (user) => {
    connectedusers[user] = socket.id;
    console.log(connectedusers);
  });

  socket.on("frontend-message", async ({ senderId, receiverId, text }) => {
    const msg = new Message({ sender: senderId, receiver: receiverId, text });
    await msg.save();
    const receiverSocketId = connectedusers[receiverId];
    const senderSocketId = connectedusers[senderId];
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("backend-message", {
        senderId,
        receiverId,
        text,
      });
      io.to(senderSocketId).emit("backend-message", {
        senderId,
        receiverId,
        text,
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected: ", socket.id);
    for (const userId in connectedusers) {
      if (connectedusers[userId] === socket.id) {
        delete connectedusers[userId];
        break;
      }
    }
  });
});

const port = process.env.PORT || 9000;
server.listen(port, () => {
  console.log("Listening to port " + port);
});
