const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Token = sequelize.define(
  "Token",
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
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "tokens",
    timestamps: false,
  }
);

User.hasMany(Token, { foreignKey: "userId" });
Token.belongsTo(User, { foreignKey: "userId" });

module.exports = Token;
