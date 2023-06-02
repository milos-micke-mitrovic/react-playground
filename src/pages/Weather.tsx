import React from "react";

import { faCloud } from "@fortawesome/free-solid-svg-icons";
import useWeather from "../hooks/useWeather";
import PageTitle from "../components/PageTitle";
import Search from "../components/Weather/Search";
import Forecast from "../components/Weather/Forecast";

const Weather = (): JSX.Element => {
  const { term, setCity, options, onInputChange, onSearchClick, forecast } =
    useWeather();

  return (
    <>
      <PageTitle title="weather-forecast" icon={faCloud} />

      <div className="flex justify-center">
        {forecast ? (
          <Forecast data={forecast} />
        ) : (
          <Search
            onInputChange={onInputChange}
            onSearchClick={onSearchClick}
            term={term}
            options={options}
            setCity={setCity}
          />
        )}
      </div>
    </>
  );
};

export default Weather;
