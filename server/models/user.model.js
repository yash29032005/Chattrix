const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("Users", userSchema);

function validateSignup(data) {
  const Schema = {
    fullname: Joi.string().required().min(3).max(50),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(1024),
  };
  return Joi.object(Schema).validate(data);
}

function validateLogin(data) {
  const Schema = {
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(1024),
  };
  return Joi.object(Schema).validate(data);
}

module.exports = {
  User: User,
  validateSignup: validateSignup,
  validateLogin: validateLogin,
};
