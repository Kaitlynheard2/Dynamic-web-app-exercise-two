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
      <section className="WeatherCard">
        <p>
          Forcast: <strong>{weatherType}</strong>
        </p>
        <p>
          Cloudiness: <strong>{cloudiness}</strong>
        </p>
        <p>
          Current Temperature: <strong>{currentTemp}</strong>
        </p>
        <p>
          humidity: <strong>{humidity}</strong>
        </p>
        <p>
          lowTemp: <strong>{lowTemp}</strong>
        </p>
        <p>
          WeatherType: <strong>{weatherType}</strong>
        </p>
        <p>
          windSpeed: <strong>{windSpeed}</strong>
        </p>
      </section>
    </div>
  );
}

export default WeatherCard;
