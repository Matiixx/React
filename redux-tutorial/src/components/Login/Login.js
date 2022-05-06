import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../features/user";

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Jan", age: 21, email: "email@gmail.com" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout({}));
        }}
      >
        Logout
      </button>
    </div>
  );
}
