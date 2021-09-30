import React from "react";

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
        <p className="CategoryStyle">Forecast </p>
        <p className="DataStyle">{weatherType}</p>
        <p className="CategoryStyle">Overcast </p>
        <p className="DataStyle">{cloudiness}%</p>
      </section>
      <section className="WeatherCard">
        <p className="CategoryStyle">Humidity </p>
        <p className="DataStyle">{humidity}%</p>
        <p className="CategoryStyle">Wind Speed </p>
        <p className="DataStyle">{windSpeed}mph</p>
      </section>
    </div>
  );
}

export default WeatherCard;
