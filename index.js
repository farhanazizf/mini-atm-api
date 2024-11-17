const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
const { sequelize, initModels } = require("./models");

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

initModels().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});