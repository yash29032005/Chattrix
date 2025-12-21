const socketIO = (io) => {
  io.on("connection", (socket) => {
    console.log("New socket connected:", socket.id);

    // -----------------------------------------------
    // 1️⃣ Setup user socket for private communication
    // -----------------------------------------------
    socket.on("setup", (userData) => {
      socket.join(userData._id); // join personal room
      socket.emit("connected");
      console.log("User joined:", userData._id);
    });

    // -----------------------------------------------
    // 2️⃣ Join a chat room
    // -----------------------------------------------
    socket.on("join_chat", (chatId) => {
      socket.join(chatId);
      console.log("User joined chat:", chatId);
    });

    // -----------------------------------------------
    // 3️⃣ Typing indicators
    // -----------------------------------------------
    socket.on("typing", (chatId) => {
      socket.in(chatId).emit("typing");
    });

    socket.on("stop_typing", (chatId) => {
      socket.in(chatId).emit("stop_typing");
    });

    // -----------------------------------------------
    // 4️⃣ Send new message
    // -----------------------------------------------
    socket.on("new_message", (message) => {
      const chat = message.chat;

      if (!chat.users) return console.log("Chat.users not defined");

      // Send to all users in the chat
      chat.users.forEach((userId) => {
        if (userId === message.sender._id) return; // don't send to sender

        socket.in(userId).emit("message_received", message);
      });
    });

    // -----------------------------------------------
    // 5️⃣ User disconnect
    // -----------------------------------------------
    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });
};

module.exports = socketIO;
