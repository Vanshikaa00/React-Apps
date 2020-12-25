import React, { useState } from "react";
import AddButton from "./AddButton";
import SubtractButton from "./SubtractButton";
const Question = ({ title, info }) => {
  const [showQuestion, setShowQuestion] = useState(false);
  return (
    <div className="item">
      <div className="qcont">
        <div className="qheading">{title}</div>
        <div>
          <button type="button" onClick={() => setShowQuestion(!showQuestion)}>
            {showQuestion ? <SubtractButton /> : <AddButton />}
          </button>
        </div>
      </div>
      {showQuestion && <span className="contentstyle">{info}</span>}
    </div>
  );
};
export default Question;
