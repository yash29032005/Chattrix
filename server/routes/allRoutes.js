const express = require("express");
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const messageRoutes = require("./message.routes");
const groupRoutes = require("./group.routes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/messages", messageRoutes);
router.use("/groups", groupRoutes);

module.exports = router;
