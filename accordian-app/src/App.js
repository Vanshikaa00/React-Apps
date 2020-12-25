import React, { useState, useEffect } from "react";
import "./App.css";
import Questions from "./data";
import OneQuestion from "./Question";

function App() {
  console.log(Questions);

  const [ques, setQues] = useState([]);
  useEffect(() => {
    setQues(Questions);
  }, []);
  return (
    <div className="App">
      <div className="cont">
        <div className="card">
          <div className="subcont1">
            <div className="heading">Frequently Asked Questions (FAQ)</div>
          </div>
          <div className="subcont2">
            {Questions.map((question) => {
              return <OneQuestion key={question.id} {...question} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
