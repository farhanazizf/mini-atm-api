const jwt = require("jsonwebtoken");
const { Token } = require("../models");

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ error: "Authorization header required" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Access token required" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const tokenExists = await Token.findOne({ where: { token } });
    if (!tokenExists)
      return res.status(403).json({ error: "Invalid or expired token" });

    req.userId = decoded.userId; // Simpan userId di request untuk digunakan di controller
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid or expired token" });
  }
};

module.exports = { authenticateUser };