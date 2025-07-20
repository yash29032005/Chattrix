const Message = require("../models/message.model");

exports.messages = async (req, res) => {
  const { senderId, receiverId } = req.params;
  const messages = await Message.find({
    $or: [
      { sender: senderId, receiver: receiverId },
      { sender: receiverId, receiver: senderId },
    ],
  }).sort({ timestamp: 1 });
  res.json(messages);
};
