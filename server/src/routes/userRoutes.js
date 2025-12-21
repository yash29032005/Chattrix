const express = require("express");
const {
  register,
  login,
  getAllUsers,
} = require("../controller/userController");
const protectauth = require("../middleware/protectauth");
const Router = express.Router();

Router.post("/", register);

Router.post("/login", login);

Router.get("/", protectauth, getAllUsers);

module.exports = Router;
