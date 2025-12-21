const Chat = require("../models/chatModel");
const User = require("../models/userModel");

exports.createPrivateChat = async (req, res) => {
  const { userId } = req.body;

  if (!userId) return res.status(400).json({ message: "UserId not provided" });

  try {
    // Check if chat exists
    let chat = await Chat.findOne({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
      .populate("users", "-password")
      .populate("latestMessage");

    // Populate latest message sender
    chat = await User.populate(chat, {
      path: "latestMessage.sender",
      select: "username email",
    });

    // If chat exists → return it
    if (chat) return res.json(chat);

    const receiver = await User.findById(userId);
    if (!receiver) {
      return res.status(404).json({ message: "User not found" });
    }

    // Else create new chat
    const newChat = await Chat.create({
      chatName: receiver.username,
      isGroupChat: false,
      users: [req.user._id, userId],
    });

    const fullChat = await Chat.findById(newChat._id).populate(
      "users",
      "-password"
    );

    return res.json(fullChat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createGroupChat = async (req, res) => {
  let { name, users } = req.body;

  if (!name || !users || users.length < 2)
    return res
      .status(400)
      .json({ message: "Group must have at least 3 members including you" });

  try {
    // Add current user as group member + admin
    users.push(req.user._id);

    const groupChat = await Chat.create({
      chatName: name,
      users,
      isGroupChat: true,
      groupAdmin: req.user._id,
    });

    const fullGroup = await Chat.findById(groupChat._id)
      .populate("users", "-password")
      .populate("groupAdmin", "-password");

    res.json(fullGroup);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/chat
exports.fetchChats = async (req, res) => {
  try {
    let chats = await Chat.find({
      users: { $elemMatch: { $eq: req.user._id } },
    })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 });

    // Populate sender inside latestMessage
    chats = await User.populate(chats, {
      path: "latestMessage.sender",
      select: "username email",
    });

    res.json(chats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
