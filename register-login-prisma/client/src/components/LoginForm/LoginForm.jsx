import React from "react";
import axios from "axios";
import { useRef } from "react";
import "./LoginForm.scss";
import { useState } from "react";

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const loginCredits = {
      username: loginRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(loginCredits);
    axios
      .post("http://localhost:3000/users/login", loginCredits)
      .then(function (response) {
        console.log(response);
      })
      .catch((error) => {
        setErrorMessage(error.response?.data?.message);
      });
  };

  return (
    <div>
      <form>
        <input type={"text"} placeholder="Login..." ref={loginRef}></input>
        <input
          type={"password"}
          placeholder="Password..."
          ref={passwordRef}
        ></input>
        <button onClick={(e) => handleLogin(e)}>Login</button>
      </form>
      <p className="error-message">{errorMessage}</p>
    </div>
  );
}
