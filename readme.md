# Mini ATM API

---

## Fitur

- **Authentication**
- **Deposit**
- **Withdraw**
- **Transaction History**
- **Token Validation**

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

- **Node.js**
- **NPM**
- **MySQL** (server or remote database)

---

## How to run

### 1. Clone Repository

Clone repository:

```bash
git clone https://github.com/username/mini-atm-api.git
cd mini-atm-api

npm install
```

### 2. Setup enviroment

copy - paste .env.sample into .env

```bash
# Port Server
PORT=5000

# Secret untuk JWT
JWT_SECRET=your_jwt_secret_key

# Konfigurasi Database
DATABASE_HOST=your_database_host
DATABASE_PORT=3306
DATABASE_USER=your_database_user
DATABASE_PASSWORD=your_database_password
DATABASE_NAME=your_database_name
```

### 3. Running Project

development

```bash
npm run dev
```

production

```bash
npm start
```

### 4. API Documentation

- **POSTMAN**: [Postman](https://www.postman.com/han888-9503/public/collection/10283566-c3accf3d-2e59-4da4-8325-dd77b81fbe03?action=share&creator=10283566&active-environment=10283566-b22987a4-e880-46a7-b6b9-b4dab7d21283)

### by Farhan Aziz F
