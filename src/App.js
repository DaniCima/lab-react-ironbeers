import "./App.css";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import ListBeers from "./components/ListBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import SingleBeer from "./components/SingleBeer";
import OutletComponent from "./components/OutletComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<OutletComponent />}>
          <Route path="/beers" element={<ListBeers />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/beers/:beerId" element={<SingleBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
