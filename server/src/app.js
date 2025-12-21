// app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const allRoutes = require("./routes");
const connectToDb = require("./config/db");

// Initialize app
const app = express();

// Connect to DB
connectToDb();

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.REACT_APP_WEB_URI,
    credentials: true,
  })
);

// API routes
app.use("/api", allRoutes);

module.exports = app;
