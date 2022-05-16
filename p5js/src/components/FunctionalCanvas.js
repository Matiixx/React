import React, { useEffect, useState } from "react";
import * as p5 from "p5";

export default function Canvas() {
  let myRef = React.createRef();
  const [myP5, setMyP5] = useState(null);
  let image = null;
  let size = { width: 0, height: 0 };

  let Sketch = (p) => {
    let dimension, canvas;
    // Loads the music file into p5.js to play on click
    p.preload = () => {
      console.log("Preload, loading image...");
      image = p.loadImage("./like.jpg");
    };

    // Initial setup to create canvas and audio analyzers
    p.setup = () => {
      dimension = p.min(p.windowWidth / 1.5, p.windowHeight / 1.5);
      p.frameRate(60);
      //p.windowWidth * 0.85, p.windowHeight * 1.0
      canvas = p.createCanvas(dimension, dimension);
      let x = p5.windowWidth - p5.width;
      let y = p5.windowHeight - p5.height;
      canvas.position(x, y);
      canvas.mouseClicked(p.handleClick);
    };

    p.draw = () => {
      //p.translate(p.width / 2, p.height / 2); // Center the canvas so that 0,0 is the center
      p.background("rgb(50,50,50)");

      if (image) {
        // console.log(image);
        p.image(image, 0, 0, p.width, (image.height * p.width) / image.width);
        size = {
          width: parseInt(p.width),
          height: parseInt((image.height * p.width) / image.width),
        };
      }
    };

    p.windowResized = () => {
      dimension = p.min(p.windowWidth / 1.5, p.windowHeight / 1.5);
      p.resizeCanvas(dimension, dimension);
    };

    p.handleClick = (e) => {
      // if (clickInImage(size, e.x, e.y))
      console.log("Click at [", e.x, e.y, "]");
      console.log(size);
    };
  };

  let clickInImage = (size, x, y) => {
    return x <= size.width && y <= size.height;
  };

  useEffect(() => {
    if (myP5) myP5.remove();
    setMyP5(new p5(Sketch, myRef.current));
  }, []);

  // useLayoutEffect(() => {
  //   return () => {
  //     myP5.remove();
  //   };
  // }, []);

  return (
    <div>
      <div
        className="canvas-div"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        ref={myRef}
      />
    </div>
  );
}
