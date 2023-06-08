import React from "react";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureArrowUp,
  faTemperatureArrowDown,
  faSun,
  faArrowUp,
  faArrowDown,
  faWind,
  faSmile,
  faDroplet,
  faCloudRain,
  faHandFist,
  faEye
} from "@fortawesome/free-solid-svg-icons";
import { ForecastType } from "../../types/others";
import Degree from "./Degree";
import {
  getFeelsLike,
  formatNumberToTime,
  getHumidityValue,
  getWindDirection,
  getPop,
  getPressure,
  getVisibilityValue,
} from "../../utils/weather";
import Tile from "./Tile";

type Props = {
  data: ForecastType;
};

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0];
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4 w-full md:w-1/2 relative">
      {/* Location */}
      <div className="text-2xl">
        {data.name},{" "}
        <span className="text-green font-thin">{data.country}</span>
      </div>

      {/* Current temperature */}
      <div className="text-4xl font-extrabold">
        <Degree value={today.main.temp} />
      </div>

      {/* Min and Max temperatures */}
      <div className="text-sm flex gap-6">
        <div>
          <FontAwesomeIcon className="text-green" icon={faTemperatureArrowUp} />{" "}
          <Degree value={today.main.temp_max} />
        </div>

        <div>
          <FontAwesomeIcon
            className="text-green"
            icon={faTemperatureArrowDown}
          />{" "}
          <Degree value={today.main.temp_min} />
        </div>
      </div>

      {/* Sunrise and sunset */}
      <div className="text-sm flex gap-6">
        <div>
          <FontAwesomeIcon className="text-green" icon={faSun} />
          <FontAwesomeIcon className="text-green" icon={faArrowUp} />{" "}
          <span>{formatNumberToTime(data.sunrise).hoursAndMinutes}</span>
        </div>

        <div>
          <FontAwesomeIcon className="text-green" icon={faSun} />
          <FontAwesomeIcon className="text-green" icon={faArrowDown} />{" "}
          <span>{formatNumberToTime(data.sunset).hoursAndMinutes}</span>
        </div>
      </div>

      {/* Weather icons */}
      <div className="flex overflow-x-scroll w-full scrollbar-thin scrollbar-thumb-green scrollbar-track-light">
        {data.list.map((item, i) => (
          <div
            className="flex flex-col items-center flex-shrink-0 w-[70px]"
            key={i}
          >
            <p className="text-sm">
              {i === 0 ? t("now") : formatNumberToTime(item.dt).hours + t("h")}
            </p>

            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={`weather-icon-${item.weather[0].description}`}
            />

            <div className="mb-2 text-sm font-bold">
              <Degree value={item.main.temp} />
            </div>
          </div>
        ))}
      </div>

      {/* Tiles */}
      <div className="flex gap-6 w-full md:w-1/2">
        <Tile
          icon={faWind}
          title={t("wind")}
          info={`${Math.round(today.wind.speed)} km/h`}
          description={`${getWindDirection(
            Math.round(today.wind.deg)
          )}, gusts ${today.wind.gust.toFixed(1)} km/h.`}
        />

        <Tile
          icon={faSmile}
          title={t("feels-like")}
          info={<Degree value={today.main.feels_like} />}
          description={`Feels like it's ${getFeelsLike(
            today.main.feels_like,
            today.main.temp
          )}.`}
        />
      </div>

      <div className="flex gap-6 w-full md:w-1/2">
        <Tile
          icon={faDroplet}
          title={t("humidity")}
          info={`${today.main.humidity} %`}
          description={`${getHumidityValue(today.main.humidity)}.`}
        />

        <Tile
          icon={faCloudRain}
          title={t("precipitation")}
          info={`${Math.round(today.pop * 100)} %`}
          description={`${getPop(today.pop)}. Clouds at ${today.clouds.all}%.`}
        />
      </div>

      <div className="flex gap-6 w-full md:w-1/2">
        <Tile
          icon={faHandFist}
          title={t("pressure")}
          info={`${today.main.pressure} hPa`}
          description={`${getPressure(today.main.pressure)} then standard.`}
        />

        <Tile
          icon={faEye}
          title={t("visibility")}
          info={`${(today.visibility /1000).toFixed()} km`}
          description={`${getVisibilityValue(today.visibility)}.`}
        />
      </div>
    </div>
  );
};

export default Forecast;
