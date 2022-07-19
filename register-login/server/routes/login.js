const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../db/userSchema");
var jwt = require("jsonwebtoken");

const DB_URI = "mongodb://127.0.0.1:27017/users";

const router = express.Router();

const generateToken = async (username) => {
  const token = jwt.sign(
    {
      username,
    },
    "secret"
  );
  return token;
};

router.post("/", async (req, res, next) => {
  await mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => console.log(err));

  let reqUsername = req?.body?.username;
  let reqPassword = req?.body?.password;

  let find = await userSchema
    .findOne(
      {
        username: reqUsername,
      },
      "username password"
    )
    .exec();

  if (!find) {
    res.status(400).json({ message: "Wrong username or password!" }).send();
    await mongoose.connection.close();
    return;
  }

  if (reqUsername === find.username && reqPassword === find.password) {
    const accessToken = await generateToken(reqUsername);
    res.status(200).json({ message: "Login success", accessToken }).send();
  } else {
    res.status(400).json({ message: "Wrong username or password!" }).send();
  }
  await mongoose.connection.close();
});

module.exports = router;
