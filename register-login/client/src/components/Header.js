import React, { useState } from "react";
import useStore from "../store/useStore";
import { checkCookie, deleteCookie } from "../utils/cookies/cookies";

export default function Header() {
  // const [isLogged, setIsLogged] = useState(checkCookie("accessToken"));
  const isLogged = useStore((state) => state.isLogged);
  const username = useStore((state) => state.username);
  const logout = useStore((state) => state.logout);

  const handleLogout = () => {
    deleteCookie("accessToken");
    logout();
  };

  return (
    <div className="header-container">
      Header
      {isLogged === true && <p>Logged as {username}</p>}
      {isLogged === true && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}
