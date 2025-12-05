// routes/group.routes.js
const express = require("express");
const Group = require("../models/group.model");
const { creategroup, getgroup } = require("../controller/group.controller");
const router = express.Router();

// Create group
router.post("/", creategroup);

// Get groups for a user
router.get("/:userId", getgroup);

module.exports = router;
