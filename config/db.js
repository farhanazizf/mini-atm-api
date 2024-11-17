const { Sequelize } = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//     port: process.env.DB_PORT || 3306,
//     logging: false,
//   }
// );

// Konfigurasi database dari environment variables
const sequelize = new Sequelize(
  process.env.DATABASE_NAME, // Nama database
  process.env.DATABASE_USER, // Username database
  process.env.DATABASE_PASSWORD, // Password database
  {
    host: process.env.DATABASE_HOST, // Host database
    port: process.env.DATABASE_PORT || 3306, // Port database (default 3306)
    dialect: "mysql", // Dialek database (MySQL)
    logging: false, // Nonaktifkan logging query
  }
);

// Tes koneksi ke database
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Koneksi ke database berhasil!");
  } catch (error) {
    console.error("Koneksi ke database gagal:", error.message);
  }
})();

module.exports = sequelize;
