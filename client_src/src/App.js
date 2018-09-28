import React from "react";
import "./App.css";
import GetData from "./components/GetData";
import pokebanner from "./img/pokemonbanner.jpg";

const App = () => (
  <div className="container">
    <img className="heroImg" src={pokebanner} alt="Pokemon Banner" />
    <h1>Search For Your Favorite Pokemon</h1>
    <GetData />
  </div>
);

export default App;
