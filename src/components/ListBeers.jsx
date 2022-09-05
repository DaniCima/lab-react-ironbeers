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
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;
