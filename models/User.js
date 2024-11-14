const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.INTEGER, // Menyimpan saldo asli dalam bentuk integer
      allowNull: false,
      defaultValue: 50000, // Default saldo adalah 50000
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

module.exports = User;
