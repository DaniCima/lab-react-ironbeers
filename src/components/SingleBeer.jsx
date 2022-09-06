import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleBeer({ beersState }) {
  const [oneBeer, setOneBeer] = useState({});
  const { beerId } = useParams();

  // useEffect(() => {
  //   const findBeer = beersState.find((beer) => beer.alpha3Code === beerId);
  //   //console.log();
  //   setOneBeer(findBeer);
  //   setDbBeer(true);
  // }, []);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log("response.data", response.data);
        setOneBeer(response.data);
      });
  }, [beerId]);

  return (
    <div>
      {/* {dbBeer && ( */}
      <>
        <div className="one-beer-box">
          <img
            src={oneBeer.image_url}
            className="img-fluid rounded-start"
            alt="..."
            style={{
              objectFit: "scale-down",
              width: "250px",
              height: "250px",
            }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{oneBeer.name}</h5>
          <p className="card-text">{oneBeer.tagline}</p>
          <p className="card-text">First Brewed: {oneBeer.first_brewed}</p>
          <p className="card-text">{oneBeer.description}</p>
          <p className="card-text">
            Attenuation Level: {oneBeer.attenuation_level}
          </p>
          <p className="card-text">
            Contributed By:{" "}
            <small className="text-muted">{oneBeer.contributed_by}</small>
          </p>
        </div>
      </>
      {/* )} */}
    </div>
  );
}

export default SingleBeer;
