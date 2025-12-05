const express = require("express");
const { signup, login, me, logout } = require("../controller/auth.controller");
const Router = express.Router();
const protectauth = require("../middleware/protectauth");
const passport = require("passport");

Router.post("/signup", signup);

Router.post("/login", login);

Router.get("/logout", logout);

Router.get("/me", protectauth, me);

// Google OAuth route
Router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google callback
Router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: process.env.REACT_APP_WEB_URI + "/login",
  }),
  async (req, res) => {
    try {
      // generate JWT for the logged in Google user
      const generatetoken = require("../utils/generatetoken");
      generatetoken(req.user._id, res);

      // redirect to frontend
      res.redirect(process.env.REACT_APP_WEB_URI);
    } catch (err) {
      console.log("Error in Google callback:", err.message);
      res.redirect(process.env.REACT_APP_WEB_URI + "/login");
    }
  }
);

module.exports = Router;
