import React, { useState, useEffect } from "react";
import "./App.css";
import rgbToHex from "../src/utils";
const SingleColor = ({ hexColor, rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <>
      <div
        className={`color-container`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
        }}
      >
        <div className="color-desc">
          <div>{weight}%</div>
          <div>{hex}</div>
          {alert && <div>COPIED TO CLIPBOARD</div>}
        </div>
      </div>
    </>
  );
};

export default SingleColor;
