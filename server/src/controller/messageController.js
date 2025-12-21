const Message = require("../models/messageModel");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");

exports.sendMessage = async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    return res.status(400).json({ message: "Invalid data passed" });
  }

  try {
    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    // If the logged-in user is NOT in chat.users array → block
    if (!chat.users.includes(req.user._id)) {
      return res.status(403).json({ message: "You are not part of this chat" });
    }

    let message = await Message.create({
      sender: req.user._id,
      content: content,
      chat: chatId,
    });

    // Populate the full message properly
    message = await message.populate("sender", "username email");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "username email",
    });

    // Update latest message in chat
    await Chat.findByIdAndUpdate(chatId, {
      latestMessage: message._id,
    });

    res.json(message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMessages = async (req, res) => {
  const { chatId } = req.params;

  try {
    const chats = await Chat.findById(chatId); // Check if chat exists
    if (!chats) {
      return res.status(404).json({ message: "Chat not found" });
    }
    const messages = await Message.find({ chat: chatId })
      .populate("sender", "username")
      .populate("chat");

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
