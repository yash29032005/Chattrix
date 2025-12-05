const express = require("express");
const { users } = require("../controller/user.controller");
const Router = express.Router();

Router.post("/", users);

module.exports = Router;
