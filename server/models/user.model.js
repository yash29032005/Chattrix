const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const complexitySchema = {
  min: 6,
  max: 10,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
};

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
  googleId: { type: String },
  name: {
    type: String,
  },
  username: { type: String, required: true, unique: true },
  email: {
=======
  fullname: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
  username: {
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
    type: String,
    required: true,
    unique: true,
  },
<<<<<<< HEAD
  password: {
    type: String,
=======
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("Users", userSchema);

function validateSignup(data) {
  const Schema = {
<<<<<<< HEAD
    name: Joi.string().required().min(3).max(50),
    email: Joi.string().email().required(),
    password: Joi.alternatives().try(
      passwordComplexity(complexitySchema),
      Joi.allow(null, "")
    ),
=======
    fullname: Joi.string().required().min(3).max(50),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: passwordComplexity(complexitySchema),
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
  };
  return Joi.object(Schema).validate(data);
}

function validateLogin(data) {
  const Schema = {
    email: Joi.string().email().required(),
    password: passwordComplexity(complexitySchema),
  };
  return Joi.object(Schema).validate(data);
}

module.exports = {
<<<<<<< HEAD
  User,
  validateSignup,
  validateLogin,
=======
  User: User,
  validateSignup: validateSignup,
  validateLogin: validateLogin,
>>>>>>> 739245a40217a2df3002488a0fecdd4378f00a5f
};
