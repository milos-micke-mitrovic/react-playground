import React, { useEffect, useState } from "react";
import { GeoOptionType, ForecastType } from "../types/others";

const useWeather = () => {
  const [term, setTerm] = useState<string>("");
  const [city, setCity] = useState<GeoOptionType | null>(null);
  const [options, setOptions] = useState<[]>([]);
  const [forecast, setForecast] = useState<ForecastType | null>(null);

  const getSearchOtpions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
      })
      .catch((e) => console.log(e));
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setTerm(value);

    if (value.trim() === "") return;

    getSearchOtpions(value.trim());
  };

  const getForecast = (city: GeoOptionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${
        city.lon
      }&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const foreCastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };

        setForecast(foreCastData);
      })
      .catch((e) => console.log(e));
  };

  const onSearchClick = () => {
    if (!city) return;

    getForecast(city);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return {
    term,
    setTerm,
    city,
    setCity,
    options,
    forecast,
    onInputChange,
    onSearchClick,
  };
};

export default useWeather;
