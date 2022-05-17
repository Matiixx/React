import React, { useState } from "react";

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

  const submitLogin = (e) => {
    if (!isTryingToRegister) {
      e.preventDefault();
      setIsTryingToRegister(true);
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
      <button style={{ width: "50%", fontSize: "20px" }} onClick={submitLogin}>
        Register
      </button>
    </div>
  );
}
