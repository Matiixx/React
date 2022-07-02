import React from "react";
import { Panel } from "primereact/panel";
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";

export default function Post({ title, body }) {
  return (
    <Panel
      header={title}
      style={{ width: "50rem", marginBottom: "1em", textAlign: "left" }}
    >
      <p className="m-0" style={{ lineHeight: "1.25" }}>
        {body}
      </p>
    </Panel>
  );
}
