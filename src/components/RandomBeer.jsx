import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        console.log("response.data", response.data);
        setRandomBeer(response.data);
      });
  }, []);

  return (
    <div>
      <div className="random-beer-box">
        <img
          src={randomBeer.image_url}
          className="img-fluid rounded-start"
          alt="..."
          style={{ objectFit: "scale-down", width: "250px", height: "250px" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title text-uppercase fw-bold">{randomBeer.name}</h5>
        <p className="card-text">{randomBeer.tagline}</p>
        <p className="card-text">First Brewed: {randomBeer.first_brewed}</p>
        <p className="card-text">{randomBeer.description}</p>
        <p className="card-text">
          Attenuation Level: {randomBeer.attenuation_level}
        </p>
        <p className="card-text">
          Contributed By:{" "}
          <small className="text-muted">{randomBeer.contributed_by}</small>
        </p>
      </div>
    </div>
  );
}

export default RandomBeer;
