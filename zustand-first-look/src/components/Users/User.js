import React from "react";
import { Chip } from "primereact/chip";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

export default function User({ name, clickHandle, isHighlighted }) {
  return (
    <Chip
      className="user-chip"
      template={
        <>
          <span className="p-chip-text">{name}</span>
          {!isHighlighted && (
            <i
              onClick={clickHandle}
              className="pi pi-plus-circle highlightButton"
            ></i>
          )}
        </>
      }
    />
  );
}
