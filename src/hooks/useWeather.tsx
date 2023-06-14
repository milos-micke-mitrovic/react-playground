import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

import { GeoOptionType, ForecastType } from "../types/others";

const useWeather = () => {
  const [term, setTerm] = useState<string>("");
  const [city, setCity] = useState<GeoOptionType | null>(null);
  // const [options, setOptions] = useState<[]>([]);
  // const [forecast, setForecast] = useState<ForecastType | null>(null);

  const forecastMutation = useMutation({
    mutationFn: (city: GeoOptionType) =>
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${
          city.lon
        }&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          return {
            ...data.city,
            list: data.list.slice(0, 16),
          };
        }),
  });

  const searchOptionsMutation = useMutation({
    mutationFn: (value: string) =>
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((data) => data),
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setTerm(value);

    if (value.trim() === "") return;

    searchOptionsMutation.mutate(value.trim());
  };

  const onSearchClick = () => {
    if (!city) return;

    forecastMutation.mutate(city);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);

      searchOptionsMutation.reset();
    }
  }, [city]);

  return {
    term,
    setCity,
    onInputChange,
    onSearchClick,
    searchOptionsMutation,
    forecastMutation,
  };
};

export default useWeather;
