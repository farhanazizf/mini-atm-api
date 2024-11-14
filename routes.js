const express = require("express");
const router = express.Router();
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");
const transactionController = require("./controllers/transactionController");
const { authenticateUser } = require("./middleware/authMiddleware");

// Register, Login, dan Logout
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authenticateUser, authController.logout);

// Proteksi Endpoint ATM dengan Middleware
router.get("/users/balance", authenticateUser, userController.getUser);
router.post("/users/deposit", authenticateUser, transactionController.deposit);
router.post(
  "/users/withdraw",
  authenticateUser,
  transactionController.withdraw
);
router.get(
  "/users/transactions",
  authenticateUser,
  transactionController.getTransactionHistory
);

module.exports = router;
