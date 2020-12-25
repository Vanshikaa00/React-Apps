import React, { useState, useEffect } from "react";
import "./card.css";
import reviews from "./data";
const Review = (props) => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  const totalLength = reviews.length;
  const prevReview = () => {
    if (index === 0) setIndex(totalLength - 1);
    else setIndex(index - 1);
  };
  const nextReview = () => {
    if (index === totalLength - 1) setIndex(0);
    else setIndex(index + 1);
  };
  const randomReview = () => {
    const newindex = Math.floor(Math.random() * totalLength);
    setIndex(newindex);
  };
  return (
    <div className="cont">
      <div className="img-container">
        <img className="person-img" src={image} alt="image" />
      </div>
      <div className="namestyle">{name}</div>
      <div className="desigstyle">{job}</div>
      <div className="contentstyle">{text}</div>
      <div className="nav">
        <div>
          <span onClick={prevReview} className="material-icons">
            arrow_backward
          </span>
        </div>
        <div>
          <span onClick={nextReview} className="material-icons">
            arrow_forward
          </span>
        </div>
      </div>
      <div>
        <button type="button" onClick={randomReview} className="btn">
          Surprise Me !
        </button>
      </div>
    </div>
  );
};

export default Review;
