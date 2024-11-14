const { User, Transaction } = require("../models");

// Fungsi untuk melakukan setoran saldo
const deposit = async (req, res) => {
  try {
    const userId = req.userId;
    const { amount } = req.body;

    // Pastikan jumlah setoran positif
    if (amount <= 0)
      return res.status(400).json({ error: "Deposit amount must be positive" });

    // Cari user
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    // Update saldo dan simpan
    user.balance += amount;
    await user.save();

    // Simpan transaksi
    await Transaction.create({ userId, type: "deposit", amount });

    res.json({ success: true, balance: user.balance });
  } catch (err) {
    res.status(500).json({ error: "Error during deposit" });
  }
};

// Fungsi untuk melakukan penarikan saldo
const withdraw = async (req, res) => {
  try {
    const userId = req.userId;
    const { amount } = req.body;

    // Validasi jumlah penarikan
    if (amount <= 0 || amount % 50000 !== 0) {
      return res
        .status(400)
        .json({
          error: "Withdrawal amount must be a positive multiple of 50000",
        });
    }

    // Cari user
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    // Pastikan saldo mencukupi untuk penarikan dan saldo mengendap minimal 50.000
    if (user.balance - amount < 50000) {
      return res
        .status(400)
        .json({
          error: "Insufficient balance or minimum balance requirement not met",
        });
    }

    // Update saldo dan simpan
    user.balance -= amount;
    await user.save();

    // Simpan transaksi
    await Transaction.create({ userId, type: "withdrawal", amount });

    res.json({ success: true, balance: user.balance });
  } catch (err) {
    res.status(500).json({ error: "Error during withdrawal" });
  }
};

// Fungsi untuk menampilkan histori transaksi
const getTransactionHistory = async (req, res) => {
  try {
    const userId = req.userId;

    // Ambil transaksi berdasarkan userId
    const transactions = await Transaction.findAll({
      where: { userId },
      order: [["timestamp", "DESC"]], // Urutkan transaksi terbaru terlebih dahulu
    });

    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: "Error fetching transaction history" });
  }
};

module.exports = { deposit, withdraw, getTransactionHistory };
