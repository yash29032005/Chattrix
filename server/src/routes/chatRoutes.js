const express = require("express");
const {
  createGroupChat,
  fetchChats,
  createPrivateChat,
} = require("../controller/chatController");
const protectauth = require("../middleware/protectauth");

const Router = express.Router();

// create 1v1 chat
// body: userId
Router.post("/private", protectauth, createPrivateChat);

// Group chat
// body: name, users[]
Router.post("/group", protectauth, createGroupChat);

// Get all chats for a user
Router.get("/", protectauth, fetchChats);

module.exports = Router;
