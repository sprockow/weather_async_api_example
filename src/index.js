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
      <Weather cityList={useWest ? WesternHemisphere : EasternHemisphere} />
      <button className="toggle" onClick={toggleLocations}>
        {useWest ? "Eastern" : "Western"}
      </button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
