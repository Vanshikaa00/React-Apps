import React from "react";
import "./App.css";
export const Menu = (props) => {
  const items = props.menu;
  console.log(items);
  return (
    <>
      <div className="container3">
        {items.map((item) => {
          const { id, title, img, price, desc } = item;
          return (
            <div className="item container4" key={id}>
              <img src={img} alt={title} />
              <div className="container5">
                <div className="expand">
                  <div className="dishname">{title}</div>
                  <div className="pricetag">${price}</div>
                </div>
                <div>
                  <hr className="u2" />
                </div>
                <div className="content">{desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
