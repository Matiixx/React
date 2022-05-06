import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateColor } from "../../features/theme";

export default function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="Set color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch(updateColor(color));
        }}
      >
        Change Color
      </button>
    </div>
  );
}
