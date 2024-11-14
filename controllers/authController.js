const { User, Token } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

// Register
const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      id: uuidv4(),
      name,
      email,
      password: hashedPassword,
    });
    res.json({ message: "User registered successfully", userId: user.id });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(400).json({ error: "Invalid email or password" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ error: "Invalid email or password" });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    await Token.create({ id: uuidv4(), userId: user.id, token });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

// Logout
const logout = async (req, res) => {
  try {
    await Token.destroy({ where: { userId: req.userId } });
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Logout failed" });
  }
};

module.exports = { register, login, logout };
