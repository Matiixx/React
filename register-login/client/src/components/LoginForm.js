import React, { useState } from "react";

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
    if (isTryingToLogin) {
      e.preventDefault();
      setIsTryingToLogin(true);
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
