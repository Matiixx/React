import React, { useState } from "react";
import Axios from "axios";
const URI_LOGIN = "http://localhost:5000/login";

export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [isTryingToLogin, setIsTryingToLogin] = useState(false);

  const usernameFormChange = (e) => {
    setLoginUsername(e.target.value);
  };

  const passwordFormChange = (e) => {
    setLoginPassword(e.target.value);
  };

  const submitLogin = (e) => {
    if (!isTryingToLogin && loginUsername && loginPassword) {
      e.preventDefault();
      setIsTryingToLogin(true);

      Axios.post(URI_LOGIN, {
        headers: {
          "Content-Type": "application/json",
        },
        username: loginUsername,
        password: loginPassword,
      })
        .then((res) => {
          setIsTryingToLogin(false);
          console.log(res);
        })
        .catch((e) => {
          setIsTryingToLogin(false);
          console.log(e);
        });
    }
  };

  return (
    <div
      className="login-div"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
        margin: "auto",
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Username..."
        style={{ width: "50%", fontSize: "20px", padding: "5px" }}
        onChange={usernameFormChange}
      ></input>
      <input
        type="password"
        placeholder="Password..."
        style={{ width: "50%", fontSize: "20px", padding: "5px" }}
        onChange={passwordFormChange}
      ></input>
      <button style={{ width: "50%", fontSize: "20px" }} onClick={submitLogin}>
        Login
      </button>
    </div>
  );
}
