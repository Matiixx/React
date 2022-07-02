import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-nav">
        Home
        <p>
          <Link to="/users">Go To Users</Link>
        </p>
      </div>
    </>
  );
}
