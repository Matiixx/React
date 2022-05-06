import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-nav">
        <p>
          Home <Link to="/about">Go To About Page</Link>
        </p>
      </div>
    </>
  );
}
