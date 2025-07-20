const express = require("express");
const { signup, login, me, logout } = require("../controller/auth.controller");
const Router = express.Router();
const protectauth = require("../middleware/protectauth");

Router.post("/signup", signup);

Router.post("/login", login);

Router.get("/logout", logout);

Router.get("/me", protectauth, me);

module.exports = Router;
