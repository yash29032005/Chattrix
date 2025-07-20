const express = require("express");
const { users } = require("../controller/user.controller");
const Router = express.Router();

Router.get("/:id", users);

module.exports = Router;
