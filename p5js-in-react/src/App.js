import React, { useEffect, useRef, useState } from "react";
import Sketch from "react-p5";

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

  //Sizes of canvas
  const [canvasHeight, setCanvasHeight] = useState(100);
  const [canvasWidth, setCanvasWidth] = useState(100);
  const maxWidth = 1600;
  const maxHeight = 800;

  let preload = (p5) => {
    setP5(p5);
    setImage(p5.loadImage("./like.jpg"));
  };

  let setup = (p5, canvasParentRef) => {
    //Create canvas
    let canvas = p5
      .createCanvas(canvasWidth, canvasHeight)
      .parent(canvasParentRef);
    //Set canvas position - center of window
    let x = (p5.windowWidth - p5.width) / 2;
    let y = (p5.windowHeight - p5.height) / 2;
    canvas.position(x, y);
  };

  let draw = (p5) => {
    //Draw background
    p5.background("rgb(0,0,0)");

    //Resize Canvas
    if (resizeCanvas) {
      setResizeCanvas(false);
      getSizing(maxHeight, maxWidth, img.height, img.width);
      p5.resizeCanvas(200, 200);
    }

    //Draw image
    if (img) {
      p5.image(img, 0, 0, 100, 100);
      img.loadPixels();
    }
  };

  const getSizing = (maxHeight, maxWidth, imgHeight, imgWidth) => {
    console.log(imgHeight, imgWidth);
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
      <Sketch preload={preload} setup={setup} draw={draw} className="App" />
    </div>
  );
}

export default App;
