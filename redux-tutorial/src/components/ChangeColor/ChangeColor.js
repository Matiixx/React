import React, { useState } from "react";

export default function ChangeColor() {
  const [color, setColor] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Set color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      ></input>
    </div>
  );
}
