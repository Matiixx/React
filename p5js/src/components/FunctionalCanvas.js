import React, { useEffect, useLayoutEffect } from "react";
import * as p5 from "p5";

export default function Canvas() {
  let myRef = React.createRef();
  let myP5;

  let Sketch = (p) => {
    let dimension, canvas;
    // Loads the music file into p5.js to play on click
    p.preload = () => {
      console.log(1233213);
    };

    // Initial setup to create canvas and audio analyzers
    p.setup = () => {
      dimension = p.min(p.windowWidth / 1.5, p.windowHeight / 1.5);
      p.frameRate(60);

      canvas = p.createCanvas(dimension, dimension);
      canvas.mouseClicked(p.handleClick);
    };

    p.draw = () => {
      p.translate(p.width / 2, p.height / 2); // Center the canvas so that 0,0 is the center
      p.background("rgb(0,0,0)");
    };

    p.windowResized = () => {
      dimension = p.min(p.windowWidth / 1.5, p.windowHeight / 1.5);
      p.resizeCanvas(dimension, dimension);
    };

    p.handleClick = () => {
      console.log("click");
    };
  };

  useEffect(() => {
    myP5 = new p5(Sketch, myRef.current);
  }, []);

  useEffect(() => {
    myP5.remove();
    myP5 = new p5(Sketch, myRef.current);
  });

  useLayoutEffect(() => {
    return () => {
      this.myP5.remove();
    };
  }, []);

  return (
    <div>
      <div className="flex justify-center" ref={myRef} />
    </div>
  );
}
