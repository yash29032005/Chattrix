const express = require("express");
const { messages } = require("../controller/message.controller");
const Router = express.Router();

Router.get("/:senderId/:receiverId", messages);

module.exports = Router;
