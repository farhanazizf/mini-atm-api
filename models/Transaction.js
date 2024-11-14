const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Transaction = sequelize.define(
  "Transaction",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    type: {
      type: DataTypes.ENUM("deposit", "withdrawal"), // Tipe transaksi: setoran atau penarikan
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER, // Jumlah transaksi
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "transactions",
    timestamps: false,
  }
);

// Relasi: User memiliki banyak transaksi, satu transaksi milik satu user
User.hasMany(Transaction, { foreignKey: "userId" });
Transaction.belongsTo(User, { foreignKey: "userId" });

module.exports = Transaction;
