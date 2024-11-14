const { User } = require("../models");

const getUser = async (req, res) => {
  try {
    const userId = req.userId; // Mengambil userId dari JWT
    const user = await User.findByPk(userId);

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ balance: user.balance });
  } catch (err) {
    res.status(500).json({ error: "Error fetching user balance" });
  }
};

module.exports = { getUser };
