import React from "react";
import { Chip } from "primereact/chip";
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import "primereact/resources/primereact.css";

export default function HighlightedUser({ name, onClick }) {
  return (
    <Chip
      className="highlighted-chip"
      template={
        <>
          <span className="p-chip-text">{name}</span>
          <i
            onClick={onClick}
            className="pi pi-minus-circle highlightButton"
            style={{ color: "white" }}
          ></i>
        </>
      }
    />
  );
}
