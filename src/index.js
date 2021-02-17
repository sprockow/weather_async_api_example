import React, { useState } from "react";
import { render } from "react-dom";
import Weather from "./Weather";
import "./styles.css";

const primaryLocations = ["Krakow", "Indianapolis", "Detroit"];

const secondaryLocations = ["Melbourne", "Shanghai", "Mumbai", "Capetown"];

const App = () => {
  const [primary, setPrimary] = useState(true);

  function toggleLocations() {
    setPrimary(!primary);
  }

  return (
    <div className="main">
      <Weather cityList={primary ? primaryLocations : secondaryLocations} />
      <button className="toggle" onClick={toggleLocations}>
        {primary ? "Use List 1" : "Use List 2"}
      </button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
