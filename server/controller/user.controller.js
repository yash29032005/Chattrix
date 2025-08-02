const { User } = require("../models/user.model");

exports.users = async (req, res) => {
  try {
    const { ids } = req.body;
    const userlist = await User.find({ _id: { $in: ids } });
    res.status(200).json({ userlist });
  } catch (error) {
    console.log("Error in users controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
