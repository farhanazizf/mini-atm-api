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

npm install
```

### 2. Running

Clone repository ke lokal Anda:

development

```bash
npm run dev
```

production

```bash
npm start
```
