import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

import { GeoOptionType, ForecastType } from "../types/others";

const useWeather = () => {
  const [term, setTerm] = useState<string>("");
  const [city, setCity] = useState<GeoOptionType | null>(null);
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchOptionsAreNeeded, setSearchOptionsAreNeeded] = useState(true);
  // const [options, setOptions] = useState<[]>([]);
  // const [forecast, setForecast] = useState<ForecastType | null>(null);

  const forecastQuery = useQuery({
    queryKey: ["getForecast", city],
    enabled: city != null && searchClicked,
    queryFn: (): Promise<ForecastType | null> =>
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${
          city?.lat
        }&lon=${city?.lon}&units=metric&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          return {
            ...data.city,
            list: data.list.slice(0, 16),
          };
        }),
  });

  const searchOptionsQuery = useQuery({
    queryKey: ["getSearchOptions", term],
    enabled: term !== "" && searchOptionsAreNeeded,
    queryFn: (): Promise<[]> =>
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${term}&limit=5&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((data) => data),
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value.trim());
    if (value.trim() === "") return;
    setSearchOptionsAreNeeded(true);
  };

  const onSetCity = (city: GeoOptionType) => {
    setCity(city);
    setSearchOptionsAreNeeded(false);
  };

  const onSearchClick = () => {
    if (!city) return;
    setSearchClicked(true);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name.trim());
      searchOptionsQuery.remove();
    }
  }, [city]);

  return {
    term,
    onSetCity,
    onInputChange,
    onSearchClick,
    searchOptionsQuery,
    forecastQuery,
  };
};

export default useWeather;
