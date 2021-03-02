import React, { useState } from "react";
import { render } from "react-dom";
import Weather from "./Weather";
import "./styles.css";

const WesternHemisphere = [
  "Atlanta",
  "Indianapolis",
  "Kokomo",
  "Detroit",
  "New York",
  "Houston",
  "Los Angeles",
  "Seattle",
  "Calgary"
];

const EasternHemisphere = [
  "Shanghai",
  "Mumbai",
  "Delhi",
  "Melbourne",
  "Bejing",
  "Bangkok",
  "Tokyo"
];

const App = () => {
  const [useWest, setWest] = useState(true);

  function toggleLocations() {
    setWest(!useWest);
  }

  return (
    <div className="main">
      <div className="list-container">
        <h1>{useWest ? "Western Hemisphere" : "Eastern Hemisphere"}</h1>
        <Weather cityList={useWest ? WesternHemisphere : EasternHemisphere} />
      </div>
      <button className="toggle" onClick={toggleLocations}>
        {useWest ? "Show Eastern" : "Show Western"}
      </button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
