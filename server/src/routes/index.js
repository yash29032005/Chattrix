const express = require("express");
const userRoutes = require("./userRoutes");
const messageRoutes = require("./messageRoutes");
const chatRoutes = require("./chatRoutes");

const router = express.Router();

router.use("/user", userRoutes);
router.use("/chat", chatRoutes);
router.use("/message", messageRoutes);

module.exports = router;
