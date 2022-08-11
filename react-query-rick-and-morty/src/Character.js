import React from "react";

export default function Character({ data }) {
  return (
    <div className="character">
      <img src={data.image} alt="character" />
      <h3>{data.name}</h3>
    </div>
  );
}
