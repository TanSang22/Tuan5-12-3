const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/user_role_db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose;