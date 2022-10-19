import React from "react";
import "./LoginForm.scss";

export default function LoginForm() {
  const handleLogin = () => {};

  return (
    <div>
      <form>
        <input type={"text"} placeholder="Login..."></input>
        <input type={"password"} placeholder="Password..."></input>
        <button onClick={handleLogin}>Login</button>
      </form>
      <p className="error-message"></p>
    </div>
  );
}
