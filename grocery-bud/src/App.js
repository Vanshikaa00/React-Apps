import React, { useState, useEffect } from "react";
import "./App.css";
import Alert from "./Alert";
import List from "./List";
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [showAllClear, setShowAllClear] = useState(false);

  const handleSubmit = () => {
    console.log("invoked");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="card">
          {/*alert message displayed for 3 sec */}
          <div>{alert.show && <Alert />}</div>

          {/* heading */}
          <div>
            <div className="heading">Grocery Bud</div>
          </div>

          {/* input list here */}
          <div>
            <div className="entry">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="e.g: butter"
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </div>

          {/* list items here */}
          <div>
            <List />
          </div>
          {/* clear all items */}
          <div>
            {showAllClear && <div className="clearall">Clear all items</div>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
