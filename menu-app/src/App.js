import "./App.css";
import React, { useState } from "react";
import { Menu } from "./Menu";
import menu from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(menu);

  const handleAllItems = () => {
    setMenuItems(menu);
  };
  const handleBreakfast = () => {
    const newMenuItems = menu.filter((items) => items.category === "breakfast");
    setMenuItems(newMenuItems);
  };
  const handleLunch = () => {
    const newMenuItems = menu.filter((items) => items.category === "lunch");
    setMenuItems(newMenuItems);
  };

  const handleShakes = () => {
    const newMenuItems = menu.filter((items) => items.category === "shakes");
    setMenuItems(newMenuItems);
  };

  return (
    <div className="container">
      {/* heading starts here */}
      <div className="item1">
        Our Foods
        <hr className="u1" />
      </div>
      {/* heading ends here */}
      {/* navbar starts here */}
      <div className="container2">
        <div onClick={handleAllItems}>All</div>
        <div onClick={handleBreakfast}>Breakfast</div>
        <div onClick={handleLunch}>Lunch</div>
        <div onClick={handleShakes}>Shakes</div>
      </div>
      {/* navbar ends here */}
      {/* menu starts here */}
      <div className="content-container">
        {/* loop starts here */}
        <Menu menu={menuItems} />
        {/* loop ends here */}
      </div>
      {/* menu ends here */}
    </div>
  );
}

export default App;
