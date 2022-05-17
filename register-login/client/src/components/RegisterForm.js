import React, { useState } from "react";
import Axios from "axios";
const URI_REGISTER = "http://localhost:5000/register";

export default function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [isTryingToRegister, setIsTryingToRegister] = useState(false);

  const usernameFormChange = (e) => {
    setRegisterUsername(e.target.value);
  };

  const passwordFormChange = (e) => {
    setRegisterPassword(e.target.value);
  };

  const submitRegister = (e) => {
    if (!isTryingToRegister && registerUsername && registerPassword) {
      e.preventDefault();
      setIsTryingToRegister(true);

      Axios.post(URI_REGISTER, {
        headers: {
          "Content-Type": "application/json",
        },
        username: registerUsername,
        password: registerPassword,
      })
        .then((res) => {
          setIsTryingToRegister(false);
        })
        .catch((e) => {
          setIsTryingToRegister(false);
        });
    }
  };

  return (
    <div
      className="register-div"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
        margin: "auto",
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
      <button
        style={{ width: "50%", fontSize: "20px" }}
        onClick={submitRegister}
      >
        Register
      </button>
    </div>
  );
}
