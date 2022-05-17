const express = require("express");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");

const app = express();

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
