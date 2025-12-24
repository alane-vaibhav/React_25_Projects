import React, { useState } from "react";
import { PracticeContext } from "../../App";

const RandomColor = () => {
  const colorContext = React.useContext(PracticeContext) || {};

  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState(colorContext?.color3) || "";

  const utility = (length) => {
    return Math.floor(Math.random() * length);
  };
  const colorItems = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const createHexColor = () => {
    setTypeOfColor("hex");

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += colorItems[utility(colorItems.length)];
    }
    setColor(hexColor);
  };

  const createRGBColor = () => {
    setTypeOfColor("rgb");
    let r = utility(256);
    let g = utility(256);
    let b = utility(256);
    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  };

  return (
    <div
      style={{
        background: color,
        height: "100px",
        width: "100vw",
        padding: "20px",
        gap: "10px",
      }}
    >
      <button onClick={createHexColor}>Generate Hex Color</button>
      <button onClick={createRGBColor}>Generate RGB Color</button>
      <button
        onClick={() => {
          typeOfColor === "hex" ? createHexColor() : createRGBColor();
        }}
      >
        Generate Random Color
      </button>

      <div>
        <h1 style={{ color: "#fff" }}>
          {typeOfColor === "hex" ? "HEX Color" : "RGB Color"}
        </h1>
        <h1 style={{ color: "#fff" }}>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
