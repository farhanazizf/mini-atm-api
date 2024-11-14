const sequelize = require("../config/db");
const User = require("./User");
const Transaction = require("./Transaction");
const Token = require("./Token");

const initModels = async () => {
  await sequelize.sync({ alter: true }); // Ini akan membuat atau memperbarui tabel sesuai model
};

module.exports = { sequelize, User, Transaction, Token, initModels };
