import React, { useEffect, useRef, useState } from "react";
import Sketch from "react-p5";

var canv;

function App() {
  //Most important, most usefull
  //-------------------------------
  const [p5, setP5] = useState("");
  //-------------------------------

  //Variable for p5.js image object
  const [img, setImage] = useState(null);
  //Ref to input
  const inputFile = useRef(null);
  //Variable to store file from inputFile
  const [file, setFile] = useState(null);
  //Bool variable to resize canvas when image is loaded
  const [resizeCanvas, setResizeCanvas] = useState(false);

  const [canvas, setCanvas] = useState(null);
  //Sizes of canvas
  const [canvasHeight, setCanvasHeight] = useState(100);
  const [canvasWidth, setCanvasWidth] = useState(100);
  const maxWidth = 1600;
  const maxHeight = 800;

  let preload = (p5) => {
    setP5(p5);
    let loadimg = p5.loadImage("./like.jpg", () => {
      setImage(loadimg);
    });
  };

  let setup = (p5, canvasParentRef) => {
    //Create canvas
    canv = p5
      .createCanvas(p5.windowWidth * 0.85, p5.windowHeight * 1.0)
      .parent(canvasParentRef);

    //Set canvas position - center of window
    let x = p5.windowWidth - p5.width;
    let y = p5.windowHeight - p5.height;
    canv.position(x, y);
    // setCanvas(canv);
  };

  let draw = (p5) => {
    //Draw background
    p5.background("rgb(0,0,0)");

    //Resize Canvas
    if (resizeCanvas) {
      setResizeCanvas(false);
      let [x, y] = getSizing(maxHeight, maxWidth, img.height, img.width);
      setCanvasHeight(x);
      setCanvasWidth(y);
      p5.resizeCanvas(y, x);
      x = (p5.windowWidth - p5.width) / 2;
      y = (p5.windowHeight - p5.height) / 2;
      // canvas.position(x, y);
    }

    //Draw image
    // if (img) {
    //   p5.image(img, 0, 0, p5.width, p5.height);
    //   // img.loadPixels();
    // }
  };

  let windowResized = (p5) => {
    console.log("dupa");
    // let canv = p5.resizeCanvas(p5.windowWidth * 0.85, p5.windowHeight * 1.0);
    // let x = p5.windowWidth - p5.width;
    // let y = p5.windowHeight - p5.height;
    // canv.position(x, y);
  };

  const getSizing = (maxHeight, maxWidth, imgHeight, imgWidth) => {
    console.log(imgHeight, imgWidth);
    return [800, 800];
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const readNewImage = (file) => {
    let reader = new FileReader();
    reader.onload = function (ev) {
      setFile(ev.target.result);
    };
    reader.readAsDataURL(file);
  };

  const onChangeFile = (e) => {
    e.stopPropagation();
    e.preventDefault();
    readNewImage(e.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      setImage(
        p5.loadImage(file, () => {
          setResizeCanvas(true);
        })
      );
    }
  }, [file]);

  useEffect(() => {
    console.log(img);
  }, [img]);

  return (
    <div className="App">
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
        onChange={onChangeFile.bind(this)}
      />
      <button onClick={onButtonClick}>Open file upload window</button>
      <Sketch
        preload={preload}
        setup={setup}
        draw={draw}
        windowResized={windowResized}
        className="App"
      />
    </div>
  );
}

export default App;
