import React from "react";
import WeatherImage, { BackgroundColorWeatherType } from "./WeatherImage";

function WeatherCard({
  cloudiness,
  currentTemp,
  highTemp,
  humidity,
  lowTemp,
  weatherDescription,
  weatherType,
  windSpeed,
}) {
  const Backgroundcolor = BackgroundColorWeatherType(weatherType);
  return (
    <div className="Wrapper">
      <div className="CurrentTempWrapper">
        <p className="CurrentTempStyle">{currentTemp}°F</p>
        <p className="DescriptionStyle">{weatherDescription}</p>
        <div className="HighAndLowWrapper">
          <p className="DataStyle">&#8593;{highTemp}°F</p>
          <p className="DataStyle">&#8595;{lowTemp}°F</p>
        </div>
      </div>
      <div className="Wrapper2">
        <section className="WeatherCard">
          <p className="CategoryStyle">forecast </p>
          <div className="WeatherImageWrapper">
            <WeatherImage weatherType={weatherType} />
          </div>
          <p className="CategoryStyle">overcast </p>
          <p className="DataStyle">{cloudiness}%</p>
        </section>
        <section className="WeatherCard">
          <p className="CategoryStyle">humidity </p>
          <p className="DataStyle">{humidity}%</p>
          <p className="CategoryStyle">wind speed </p>
          <p className="DataStyle">{windSpeed}mph</p>
        </section>
      </div>
    </div>
  );
}

export default WeatherCard;
