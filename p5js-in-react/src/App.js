import React from "react";
import Sketch from "react-p5";

function App() {
  let img;
  let i = 0;
  let preload = (p5) => {
    img = p5.loadImage("./like.jpg");
    // img.hide();
  };

  let setup = (p5, canvasParentRef) => {
    let canvas = p5.createCanvas(100, 100).parent(canvasParentRef);
    let x = (p5.windowWidth - p5.width) / 2;
    let y = (p5.windowHeight - p5.height) / 2;
    canvas.position(x, y);

    // img.hide();
    console.log(i);
    // img.loadPixels();
  };

  let draw = (p5) => {
    p5.background("rgb(0,0,110)");
    p5.stroke(255);
    p5.strokeWeight(5);
    p5.ellipse(10, 10, 10, 10);
    if (img) p5.image(img, 0, 0, 100, 100);
  };

  return (
    <div className="App">
      <Sketch preload={preload} setup={setup} draw={draw} className="App" />
    </div>
  );
}

export default App;
