const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const generatetoken = require("../utils/generatetoken");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists." });
  }

  const hashpassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = new User({ username, email, password: hashpassword });
  await newUser.save();

  const token = generatetoken(newUser._id, res);

  res.status(201).json({
    message: "User registered successfully.",
    user: { name: newUser.username, id: newUser._id },
    token,
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password." });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password." });
  }

  const token = generatetoken(user._id, res);

  res.status(200).json({
    message: "Login successful.",
    user: { name: user.username, id: user._id },
    token,
  });
};

exports.getAllUsers = async (req, res) => {
  const id = req.user._id;

  const users = await User.find({ _id: { $ne: id } }).select("-password");
  res.status(200).json(users);
};
