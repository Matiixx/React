const express = require("express");
const cors = require("cors");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");

const app = express();
app.use(cors());
app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Add other headers here
  res.setHeader("Access-Control-Allow-Methods", "POST, GET"); // Add other methods here
  res.send();
});

app.use(express.json());

app.listen(5000, () => {
  console.log("running register-login-server");
});

app.get("/", (req, res) => {
  res.json({
    message: "register-login-server",
  });
});

app.use("/login", loginRoute);
app.use("/register", registerRoute);
