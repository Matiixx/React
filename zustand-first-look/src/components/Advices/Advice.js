import React from "react";
import { Card } from "primereact/card";

export default function Advice({ adviceContent }) {
  if (adviceContent === undefined) {
    return (
      <Card className="advice-card">
        <i className="pi pi-spin pi-spinner" style={{ fontSize: "2em" }}></i>
      </Card>
    );
  }
  return (
    <Card className="advice-card" title={"#" + adviceContent?.id}>
      {'"'}
      {adviceContent.advice}
      {'"'}
    </Card>
  );
}
