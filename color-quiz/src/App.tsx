import React, { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [color, setColor] = useState("");

  const randomColor = () => {
    let array = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    return (
      "#" +
      new Array(6)
        .fill("")
        .map(() => array[Math.floor(array.length * Math.random())])
        .join("")
    );
  };

  useEffect(() => {
    setColor(randomColor());
  }, []);

  useEffect(() => {
    if (color) console.log(color);
  }, [color]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Choose correct color</h2>
      </header>
      <main>
        <div
          className="color-box"
          style={{ backgroundColor: color ? color : "" }}
        ></div>
        <div className="answers-container">
          <button>{color ? color : "1"}</button>
          <button>2</button>
          <button>3</button>
        </div>
      </main>
    </div>
  );
}

export default App;
