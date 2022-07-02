import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="nav">
        Home
        <p>
          <Link to="/users">Go To Users</Link>
        </p>
        <p>
          <Link to="/posts">Go To Posts</Link>
        </p>
        <p>
          <Link to="/advice">Go To Advices</Link>
        </p>
      </div>
    </>
  );
}
