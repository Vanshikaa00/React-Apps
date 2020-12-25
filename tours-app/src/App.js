import React, { useState, useEffect } from "react";
import ReadMoreReact from "read-more-react";
import ReadMoreAndLess from "react-read-more-less";
import "./App.css";
const url = "https://course-api.netlify.app/api/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetch(url);
    if (data.status >= 200 && data.status <= 299) {
      const tours = await data.json();
      console.log(tours);
      setTours(tours);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickHandler = (id) => {
    let newTours = tours.filter((place) => place.id !== id);
    setTours(newTours);
  };

  const clearAll = () => {
    setTours([]);
  };

  if (isLoading) {
    return (
      <div className="loading">
        <div class="sk-cube-grid">
          <div class="sk-cube sk-cube1"></div>
          <div class="sk-cube sk-cube2"></div>
          <div class="sk-cube sk-cube3"></div>
          <div class="sk-cube sk-cube4"></div>
          <div class="sk-cube sk-cube5"></div>
          <div class="sk-cube sk-cube6"></div>
          <div class="sk-cube sk-cube7"></div>
          <div class="sk-cube sk-cube8"></div>
          <div class="sk-cube sk-cube9"></div>
        </div>
        <div>Loading...</div>
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="cont">
        <div className="tourheading">No more Tours left :(</div>
        <button className="btn2" onClick={fetchData}>
          Wanna see more tours?
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <div className="container">
        <div className="heading">Our tours</div>

        {tours.map((tour) => {
          const { id, image, info, name, price } = tour;
          return (
            <div>
              <div className="card" key={id}>
                <div className="imgsize">
                  <img src={image} />
                </div>
                <div className="content">
                  <div className="subheading">
                    <p className="c1">{name}</p>
                    <button className="pricetag">$ {price}</button>
                  </div>
                  <div className="text">
                    <ReadMoreAndLess
                      className="read-more-content"
                      charLimit={100}
                      readMoreText="Read more"
                      readLessText="Read less"
                    >
                      {info}
                    </ReadMoreAndLess>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn2"
                      onClick={() => clickHandler(id)}
                    >
                      Not Interested
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
