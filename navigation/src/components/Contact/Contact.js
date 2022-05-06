import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-nav">
        <p>Contact</p>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go To Home Page
        </button>
      </div>
    </>
  );
}
