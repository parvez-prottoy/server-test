const mongoose = require("mongoose");

const url = require("./config").db.url;
const userName = require("./config").db.userName;
const password = require("./config").db.password;
const option = {
  user: userName,
  pass: password,
  autoIndex: true,
};
const connectDB = async () => {
  try {
    mongoose.connect(url, option);
    console.log("MongoDB is connected.");
  } catch (error) {
    console.log("MongoDB is not connected.");
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
