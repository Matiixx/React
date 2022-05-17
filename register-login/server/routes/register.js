const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../db/userSchema");
const { route } = require("./login");

const DB_URI = "mongodb://127.0.0.1:27017/users";

const router = express.Router();

router.post("/", async (req, res, next) => {
  await mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => console.log(err));

  let reqUsername = req?.body?.username;
  let reqPassword = req?.body?.password;

  if (reqUsername && reqPassword) {
    let newUser = new userSchema({
      username: reqUsername,
      password: reqPassword,
    });

    let find = await userSchema.findOne({
      username: reqUsername,
    });

    if (find) {
      res.status(400).send({
        message: "Username unavailable",
      });
      mongoose.connection.close();
      return;
    }

    await newUser.save();
    res.sendStatus(200).send();
  } else {
    res.sendStatus(400).send();
  }

  mongoose.connection.close();
});

module.exports = router;
