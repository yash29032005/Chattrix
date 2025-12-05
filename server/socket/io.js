const Message = require("../models/message.model");

const connectedUsers = {};

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("Client connected: ", socket.id);

    socket.on("register-user", (userId) => {
      connectedUsers[userId] = socket.id;
      io.emit("online-users", Object.keys(connectedUsers));
    });

    // typing indicator
    socket.on("typing", ({ senderId, receiverId }) => {
      const receiverSocketId = connectedUsers[receiverId];
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("show-typing", { senderId });
      }
    });

    socket.on("stop-typing", ({ senderId, receiverId }) => {
      const receiverSocketId = connectedUsers[receiverId];
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("hide-typing", { senderId });
      }
    });

    // join group
    socket.on("join-group", (groupId) => {
      socket.join(groupId);
      console.log(`User joined group ${groupId}`);
    });

    // group message
    socket.on("frontend-group-message", async ({ senderId, groupId, text }) => {
      const msg = new Message({ sender: senderId, group: groupId, text });
      await msg.save();

      io.to(groupId).emit("backend-group-message", { senderId, groupId, text });
    });

    // private message
    socket.on("frontend-message", async ({ senderId, receiverId, text }) => {
      const msg = new Message({ sender: senderId, receiver: receiverId, text });
      await msg.save();

      const receiverSocketId = connectedUsers[receiverId];
      const senderSocketId = connectedUsers[senderId];

      if (receiverSocketId) {
        io.to(receiverSocketId).emit("backend-message", {
          senderId,
          receiverId,
          text,
        });
      }
      if (senderSocketId) {
        io.to(senderSocketId).emit("backend-message", {
          senderId,
          receiverId,
          text,
        });
      }
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected: ", socket.id);
      for (const userId in connectedUsers) {
        if (connectedUsers[userId] === socket.id) {
          delete connectedUsers[userId];
          break;
        }
      }
      io.emit("online-users", Object.keys(connectedUsers));
    });
  });
};
