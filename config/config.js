require("dotenv").config("../.env");

const dev = {
  app: {
    port: process.env.PORT || 8080,
  },
  db: {
    url: process.env.MONGO_URL || "mongodb://localhost:27017/test-server",
    userName: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
};

module.exports = dev;
