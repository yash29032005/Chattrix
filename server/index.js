require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const http = require("http");
const { Server } = require("socket.io");
require("./config/passport");
const session = require("express-session");
const passport = require("passport");

const connectToDb = require("./config/db");
const allRoutes = require("./routes/allRoutes");

// express + http
const app = express();
const server = http.createServer(app);

// socket.io setup
const io = new Server(server, {
  cors: {
    origin: process.env.REACT_APP_WEB_URI,
    credentials: true,
  },
});

// db connect
connectToDb();

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.REACT_APP_WEB_URI,
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET || "supersecret", // use strong secret in .env
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // set true if using https
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/api", allRoutes);

// socket logic (separated)
require("./socket/io")(io);

const port = process.env.PORT || 9000;
server.listen(port, () => {
  console.log("Listening to port " + port);
});
