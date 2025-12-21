const express = require("express");
const { sendMessage, getMessages } = require("../controller/messageController");
const protectauth = require("../middleware/protectauth");
const Router = express.Router();

// Send a message
// body: content, chatId
Router.post("/", protectauth, sendMessage);

// Get all messages of a chat
// params: chatId
Router.get("/:chatId", getMessages);

module.exports = Router;
