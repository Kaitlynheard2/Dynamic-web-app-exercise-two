import React from "react";

function WeatherCard({
  cloudiness,
  currentTemp,
  highTemp,
  humidity,
  lowTemp,
  weatherType,
  windSpeed,
}) {
  return (
    <div className="Wrapper">
      <div className="CurrentTempWrapper">
        <p className="CurrentTempStyle">{currentTemp}°</p>
        <div className="HighAndLowWrapper">
          <p className="DataStyle">&#8593;{highTemp}°</p>
          <p className="DataStyle">&#8595;{lowTemp}°</p>
        </div>
      </div>
      <section className="WeatherCard">
        <p className="DataStyle">
          <p className="CategoryStyle">Forecast </p>
          {weatherType}
        </p>
        <p className="DataStyle">
          <p className="CategoryStyle">Overcast </p>
          {cloudiness}%
        </p>
      </section>
      <section className="WeatherCard">
        <p className="DataStyle">
          <p className="CategoryStyle">Humidity </p>
          {humidity}%
        </p>
        <p className="DataStyle">
          <p className="CategoryStyle">Wind Speed </p>
          {windSpeed}
        </p>
      </section>
    </div>
  );
}

export default WeatherCard;
