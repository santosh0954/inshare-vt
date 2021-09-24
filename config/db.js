require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected..."))
    .catch((err) => {
      console.log("Connection Failed...", err.message);
    });
}

module.exports = connectDB;
