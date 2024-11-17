.env

# Mini ATM API

Mini ATM API adalah aplikasi backend untuk sistem ATM sederhana yang memungkinkan pengguna melakukan **login**, **registrasi**, **penarikan**, **penyetoran**, dan melihat **riwayat transaksi**. Dibangun menggunakan **Node.js**, **Express.js**, dan **Sequelize** dengan database **MySQL**.

---

## Fitur

- **Authentication**: Login dan registrasi menggunakan JWT.
- **Deposit**: Menambahkan saldo ke akun pengguna.
- **Withdraw**: Penarikan saldo dengan aturan:
  - Hanya dalam kelipatan Rp50.000.
  - Tidak boleh kurang dari saldo minimum Rp50.000 setelah penarikan.
- **Transaction History**: Riwayat lengkap transaksi pengguna.
- **Token Validation**: Validasi token JWT untuk keamanan dan akses terautentikasi.

---

## Spesifikasi Teknologi

- **Framework**: Node.js + Express.js
- **Database**: MySQL
- **ORM**: Sequelize
- **Autentikasi**: JWT (JSON Web Tokens)
- **Hosting**: [Railway](https://railway.app)

---

## Persyaratan

Pastikan Anda memiliki perangkat berikut terinstal di sistem Anda:

- **Node.js** (v14 atau lebih baru)
- **NPM** (v6 atau lebih baru)
- **MySQL** (server atau remote database)

---

## Cara Menjalankan Proyek

### 1. Clone Repository

Clone repository ke lokal Anda:

```bash
git clone https://github.com/username/mini-atm-api.git
cd mini-atm-api
2. Install Dependencies
Jalankan perintah berikut untuk menginstal semua dependencies:

bash

npm install
3. Konfigurasi Environment
Buat file .env di root proyek Anda, lalu tambahkan konfigurasi berikut:

env

PORT=5000
JWT_SECRET=your_jwt_secret_key
DATABASE_HOST=your_database_host
DATABASE_PORT=3306
DATABASE_USER=your_database_user
DATABASE_PASSWORD=your_database_password
DATABASE_NAME=your_database_name
Pastikan Anda mengganti nilai variabel di atas sesuai dengan konfigurasi database Anda.

4. Setup Database
Inisialisasi database menggunakan Sequelize CLI:

Jalankan migrasi untuk membuat tabel:

bash

npx sequelize-cli db:migrate
(Opsional) Tambahkan data awal (seed):

bash

npx sequelize-cli db:seed:all
5. Menjalankan Aplikasi
Untuk menjalankan server:

bash

npm start
Atau untuk pengembangan dengan hot-reload:

bash

npm run dev
Server akan berjalan di: http://localhost:5000

Endpoint API
Authentication
Register

URL: /api/register
Method: POST
Body:
json

{
  "name": "John Doe",
  "email": "johndoe@mail.com",
  "password": "password123"
}
Login

URL: /api/login
Method: POST
Body:
json

{
  "email": "johndoe@mail.com",
  "password": "password123"
}
Transaction
Deposit

URL: /api/deposit
Method: POST
Headers: Authorization: Bearer <token>
Body:
json

{
  "amount": 100000
}
Withdraw

URL: /api/withdraw
Method: POST
Headers: Authorization: Bearer <token>
Body:
json

{
  "amount": 50000
}
Transaction History

URL: /api/transactions
Method: GET
Headers: Authorization: Bearer <token>
Token Validation
Semua endpoint selain login/register memerlukan token JWT.
Jika token kedaluwarsa, Anda akan mendapatkan respons:
json

{
  "error": "Token has expired, please login again"
}
```
