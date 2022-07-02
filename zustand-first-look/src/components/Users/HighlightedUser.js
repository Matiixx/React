import React from "react";
import { Chip } from "primereact/chip";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";

export default function HighlightedUser({ name, clickHandle }) {
  return (
    <Chip
      className="user-chip highlighted"
      template={
        <>
          <span className="p-chip-text">{name}</span>
          <i
            onClick={clickHandle}
            className="pi pi-minus-circle highlightButton"
            style={{ color: "white" }}
          ></i>
        </>
      }
    />
  );
}
