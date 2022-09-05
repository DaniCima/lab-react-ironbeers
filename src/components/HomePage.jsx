import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <ul className="links">
        <li className="link">
          <Link to={`/beers`}>All Beers </Link>
        </li>
        <li className="link">
          <Link to={`/random-beer`}>Random Beer </Link>
        </li>
        <li className="link">
          <Link to={`/new-beer`}>New Beer </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
