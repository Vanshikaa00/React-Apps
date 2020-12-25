import React, { useState } from "react";
import "./App.css";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-heading">
        <div>
          <h1>Color Generator</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              onChange={(e) => setColor(e.target.value)}
              value={color}
              placeholder="Enter a color"
              className={`${error}?'error':null`}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            ></SingleColor>
          );
        })}
      </div>
    </>
  );
}

export default App;
