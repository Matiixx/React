const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../db/userSchema");
const { route } = require("./login");

const DB_URI = "mongodb://127.0.0.1:27017/users";

const router = express.Router();

router.get("/", (res, req, next) => {
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB");
      req.json({
        message: "Register endpoint",
      });
    })
    .catch((err) => console.log(err));

  mongoose.connection.close();
});

module.exports = router;
