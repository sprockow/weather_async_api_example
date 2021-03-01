import React, { useEffect, useState, Fragment } from "react";
import { getCurrentWeather } from "./Api";

export async function iterateThroughCities(cityList) {
  const responseArray = [];

  for (const city of cityList) {
    const temp_c = await getCurrentWeather(city);
    responseArray.push({ city, temp_c });
  }
  return responseArray;
}

export default function Weather({ cityList }) {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    setWeather([]);
    iterateThroughCities(cityList).then((responseArray) => {
      setWeather(responseArray);
    });
  }, [setWeather, cityList]);

  return (
    <dl>
      {weather.length ? (
        weather.map((cityWeather) => {
          return (
            <Fragment key={`${cityWeather.city}`}>
              <dt>{cityWeather.city}</dt>
              <dd>{cityWeather.temp_c}&deg; </dd>
            </Fragment>
          );
        })
      ) : (
        <span>Loading...</span>
      )}
    </dl>
  );
}
