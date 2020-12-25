import React from "react";
import "./App.css";
const List = () => {
  return (
    <>
      <div className="content-cont">
        <div className="content">Some content</div>
        <div className="btn-cont">
          <div>
            <span className="edit material-icons">create</span>
          </div>
          <div>
            <span className="delete material-icons">delete</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
