import React, { useState, useEffect } from "react";
import "./App.css";
const url = "https://baconipsum.com/api/?type=meat-and-filler";
function App() {
  const [count, setCount] = useState(0);
  const [content, setContent] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(url);
    const op = await response.json();
    setData(op);
    console.log(data);
  };

  const handleContent = (e) => {
    e.preventDefault();
    let quan = parseInt(count);
    if (count <= 0) {
      quan = 1;
    }
    if (count > 5) {
      quan = 5;
    }
    setContent(data.slice(0, quan));
  };

  return (
    <div>
      <div className="container">
        <div className="heading items">TIRED OF BORING LOREM IPSUM?</div>
        <div className="items input-container">
          <div>Paragraphs: </div>
          <div>
            <input
              type="number"
              name="count"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          <div>
            <button type="button" className="btn" onClick={handleContent}>
              GENERATE
            </button>
          </div>
        </div>
        <div className="items content-container">
          {content.map((item, index) => {
            return (
              <div key={index}>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
