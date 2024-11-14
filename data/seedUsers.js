const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");
const { User } = require("../models"); // Asumsi model User ada di folder models

const seedUsers = async () => {
  try {
    const users = [];

    // Buat 20 data user dengan saldo antara 50000 dan 100000
    for (let i = 0; i < 20; i++) {
      const balance = Math.floor(Math.random() * 6 + 5) * 10000; // Nilai antara 50000 dan 100000 dalam kelipatan 10000

      users.push({
        id: uuidv4(),
        name: faker.person.fullName(),
        balance, // Saldo acak antara 50000 dan 100000 sebagai integer
        createdAt: new Date(),
      });
    }

    // Tambahkan data ke tabel users
    await User.bulkCreate(users);
    console.log("20 rows berhasil ditambahkan ke tabel users.");
  } catch (error) {
    console.error("Error saat menambahkan data:", error);
  }
};

// Jalankan seeding
seedUsers().then(() => process.exit());
