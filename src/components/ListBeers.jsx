import React from "react";
import { Link } from "react-router-dom";

function ListBeers({ beersState }) {
  return (
    <div>
      {beersState.map((beer) => {
        return (
          <div key={beer._id}>
            <Link className="one-beer" to={`/beers/${beer._id}`}>
              <img
                src={beer.image_url}
                alt="one-beer-pic"
                width={100}
                className="one-beer-img"
              />
              {beer.name}
            </Link>
            <p className="card-text">{beer.tagline}</p>
            <p className="card-text">
              Contrubuted By:{" "}
              <small className="text-muted">{beer.contributed_by}</small>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;
