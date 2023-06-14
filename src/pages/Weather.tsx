import React from "react";

import { faCloud } from "@fortawesome/free-solid-svg-icons";
import useWeather from "../hooks/useWeather";
import PageTitle from "../components/PageTitle";
import Search from "../components/Weather/Search";
import Forecast from "../components/Weather/Forecast";
import Spinner from "../components/Spinner";
import Error from "../components/UI/Error";

const Weather = (): JSX.Element => {
  const {
    term,
    setCity,
    onInputChange,
    onSearchClick,
    searchOptionsMutation,
    forecastMutation,
  } = useWeather();

  return (
    <>
      <PageTitle title="weather-forecast" icon={faCloud} />

      <div className="flex flex-col gap-16 items-center">
        {!forecastMutation.data && (
          <Search
            onInputChange={onInputChange}
            onSearchClick={onSearchClick}
            term={term}
            options={searchOptionsMutation.data || []}
            setCity={setCity}
          />
        )}

        {forecastMutation.isError && <Error />}

        {forecastMutation.isLoading && <Spinner />}

        {forecastMutation.data && <Forecast data={forecastMutation.data} />}
      </div>
    </>
  );
};

export default Weather;
