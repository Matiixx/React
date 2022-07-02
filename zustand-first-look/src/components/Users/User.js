import React from "react";
import { Chip } from "primereact/chip";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

export default function User({ name, onClick, isHighlighted }) {
  return (
    <Chip
      className="mr-2 mb-2"
      template={
        <>
          <span className="p-chip-text">
            {name} {isHighlighted}
          </span>
          {!isHighlighted && (
            <i
              onClick={onClick}
              className="pi pi-plus-circle highlightButton"
            ></i>
          )}
        </>
      }
    />
  );
}
