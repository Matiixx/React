import { useState } from "react";
import useWindowDimensions from "./hooks/useWindowDimension";
import "./App.css";

function App() {
  const { width, height } = useWindowDimensions();
  return (
    <div className="App">
      <h2>width: {width + "px"}</h2>
      <h2>height: {height + "px"}</h2>
    </div>
  );
}

export default App;
