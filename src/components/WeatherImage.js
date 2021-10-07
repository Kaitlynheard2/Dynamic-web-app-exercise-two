import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudRain,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

export function BackgroundColorWeatherType(weatherType) {
  switch (weatherType) {
    case "Clear":
      return `rgba(195, 223, 232)`;
    case "Clouds" || "Rain":
      return `rgba(146, 149, 150)`;
    case "Snow":
      return `rgba(215, 216, 217)`;
    default:
      return `rgba(249, 250, 185)`;
  }
}

function WeatherImage({ weatherType }) {
  switch (weatherType) {
    case "Clouds":
      return <FontAwesomeIcon icon={faCloud} />;
    case "Clear":
      return <FontAwesomeIcon icon={faSun} />;
    case "Rain":
      return <FontAwesomeIcon icon={faCloudRain} />;
    case "Snow":
      return <FontAwesomeIcon icon={faSnowflake} />;
    default:
      return <FontAwesomeIcon icon={faSun} />;
  }
}

export default WeatherImage;
