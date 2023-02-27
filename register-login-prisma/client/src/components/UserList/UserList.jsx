import axios from "axios";
import React from "react";
import { useEffect } from "react";

export default function UserList() {
  useEffect(() => {
    axios.get("http://localhost:3000/users");
  }, []);

  return <div>UserList</div>;
}
