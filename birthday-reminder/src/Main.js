import React, { useState } from "react";
import "./main.css";
import { Birthdays } from "./Birthdays";
const Main = () => {
  const [people, setPeople] = useState(Birthdays);
  console.log(people);
  const count = people.length;
  return (
    <div>
      <div className="App">
        <div className="column">
          <div className="card">
            <div className="heading">🎉 {count} birthdays today 🎉</div>
            {people.map((person) => {
              const { id, name, age, img } = person;
              const removeItem = (id) => {
                let newItems = people.filter((person) => person.id !== id);
                setPeople(newItems);
              };
              return (
                <>
                  <div className="container" key={id}>
                    <div className="img-container">
                      <img className="person-img" src={img} title={name} />
                    </div>
                    {/* <img className="imgsize" src={img} title={name} /> */}
                    <div className="content">
                      <div>
                        <b>
                          {" "}
                          <p className="c1">{name}</p>
                        </b>
                      </div>
                      <div>
                        <p className="c2">{age} years</p>
                      </div>
                    </div>
                    <div className="c3">
                      <span
                        title="Remove Birthday"
                        class="material-icons c4"
                        onClick={() => removeItem(id)}
                      >
                        highlight_off
                      </span>
                    </div>
                  </div>
                </>
              );
            })}

            <div className="centerbtn">
              <button
                type="button"
                className="btn "
                onClick={() => setPeople([])}
              >
                Clear All Items
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
