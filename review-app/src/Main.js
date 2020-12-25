import React from "react";
import Review from "./Review";
import "./App.css";

function Main() {
  return (
    <div>
      <div className="heading">Our Reviews</div>
      <div className="container">
        <Review />
      </div>
    </div>
  );
}

export default Main;
