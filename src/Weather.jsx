import React, { useEffect, useState } from "react";
import { getCurrentWeather } from "./Api";

export async function iterateThroughCities(cityList) {
  const responseArray = [];

  for (const city of cityList) {
    const temp_c = await getCurrentWeather(city);

    // Required data format for list
    const listEntry = {
      temp_c,
      city: city
    };

    responseArray.push(listEntry);
  }
  return responseArray;
}

export default function Weather({ cityList }) {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    iterateThroughCities(cityList).then((responseArray) => {
      setWeather(responseArray);
    });
  }, [setWeather, cityList]);

  return (
    <ul>
      {weather.length ? (
        weather.map((cityWeather) => {
          return (
            <li key={`${cityWeather.city}`}>
              <span>{cityWeather.city}</span>
              <span>{cityWeather.temp_c}&deg; </span>
            </li>
          );
        })
      ) : (
        <span>Loading...</span>
      )}
    </ul>
  );
}
