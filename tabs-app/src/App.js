import React, { useState, useEffect } from "react";

import "./App.css";
// data
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();

    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];

  return (
    <div className="App">
      <div className="container">
        <div>
          <div className="heading">Experience</div>
          <hr className="line1" />
          <div className="container-1">
            {/* side tabs start */}
            <div className="item item1">
              <ul>
                {jobs.map((j, index) => {
                  return (
                    <li key={index} onClick={() => setValue(index)}>
                      {j.company}
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* side tab ends */}
            {/* candidate info starts */}
            <div className="item item2">
              <div className="title">{title}</div>
              <div>
                <button className="company">{company}</button>
              </div>
              <div className="date">{dates}</div>
              {duties.map((item, index) => {
                return (
                  <div key={index} className="desc">
                    <div>
                      <span className="material-icons c1">double_arrow</span>
                    </div>
                    <div>{item}</div>
                  </div>
                );
              })}
              <div>
                <button type="button" className="btn">
                  MORE
                </button>
              </div>
            </div>
            {/* candidate info ends */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
