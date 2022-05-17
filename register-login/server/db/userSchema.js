const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const DB_Model = mongoose.model("users", userSchema);
module.exports = DB_Model;
