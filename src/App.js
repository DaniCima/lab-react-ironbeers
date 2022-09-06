import "./App.css";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ListBeers from "./components/ListBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import SingleBeer from "./components/SingleBeer";
import OutletComponent from "./components/OutletComponent";
import axios from "axios";

function App() {
  const [beersState, setBeersState] = useState([]);
  const apiUrl = "https://ih-beers-api2.herokuapp.com/beers";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setBeersState(response.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(beersState);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<OutletComponent />}>
          <Route
            path="/beers"
            element={<ListBeers beersState={beersState} />}
          />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route
            path="/beers/:beerId"
            element={<SingleBeer beersState={beersState} />}
          />
          <Route path="/new-beer" element={<NewBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
