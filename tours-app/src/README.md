<div className="container">
      <div className="heading">Our tours</div>
      <div className="card" key={id}>
        <img src={image} className="imgsize" />
        <div className="content">
          <div className="subheading">
            <p className="c1">{name}</p>
            <button className="pricetag">{price}</button>
          </div>
          <div className="text">{info}</div>
          <div>
            <button type="button" className="btn2">
              Not Interested
            </button>
          </div>
        </div>
      </div>
    </div>
