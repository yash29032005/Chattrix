exports.creategroup = async (req, res) => {
  try {
    const { name, members, admin } = req.body;
    const group = new Group({ name, members, admin });
    await group.save();
    res.json(group);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getgroup = async (req, res) => {
  try {
    const groups = await Group.find({ members: req.params.userId });
    res.json(groups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
