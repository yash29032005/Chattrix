const jwt = require("jsonwebtoken");

const generatetoken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SECRETKEY, {
    expiresIn: "1d",
    // expiresIn: "1m",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
    maxAge: 24 * 60 * 60 * 1000,
    // maxAge: 60 * 1000,
  });

  return token;
};

module.exports = generatetoken;
