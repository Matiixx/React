import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [goToContact, setGoToContact] = useState(false);

  if (goToContact) {
    return <Navigate to="/contact" />;
  }

  return (
    <>
      <div className="home-nav">
        <p>About</p>
        <button
          onClick={() => {
            setGoToContact(true);
          }}
        >
          Go To Contact Page
        </button>
      </div>
    </>
  );
}
