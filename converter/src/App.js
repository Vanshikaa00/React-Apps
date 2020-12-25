import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState("");
  const [alert, setAlert] = useState(false);
  const [answer, setAnswer] = useState("");
  const isInputInValid = (num) => {
    let ans = false;
    for (let i = 0; i < 8; i++) {
      if (num.charAt(i) == 0 || num.charAt(i) == 1) {
        ans = false;
      } else {
        ans = true;
        break;
      }
    }
    return ans;
  };
  const resetting = (e) => {
    setAlert(false);
    setAnswer("");
    document.getElementById("inputval").value = "";
  };
  const isInputNotANumber = (str) => {
    return isNaN(str);
  };
  const handleCalculation = (e) => {
    e.preventDefault();
    const len = number.length;
    if (
      len > 8 ||
      isInputInValid(number) ||
      isInputNotANumber(number) ||
      number === ""
    ) {
      setAlert(true);
    } else {
      const res = parseInt((number + "").replace(/[^01]/gi, ""), 2);

      setAnswer(res);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="pattern-dots-md dots max-w-20pc">
          <h1 className="heading">Bin2Dec Converter</h1>
        </div>
        <form>
          <div>
            <label>Enter binary value: </label>
            <div>
              <input
                id="inputval"
                type="text"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            {alert && (
              <div>
                <div className="errorlabel">some error!!</div>
                <button type="button" onClick={resetting}>
                  Reset again
                </button>
              </div>
            )}
          </div>
          <div>
            <button type="button" onClick={handleCalculation}>
              Convert
            </button>
          </div>
        </form>
        <div className="answer">{answer}</div>
      </div>
    </div>
  );
};
export default App;
