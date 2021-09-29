import React, { useMemo } from "react";
import WeatherCard from "../components/WeatherCard";

function Home() {
  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    //destructuring the object
    //this is where we process data
    return {
      cloudiness: 100,
      currentTemp: `76`,
      highTemp: `80`,
      humidity: 100,
      lowTemp: `60`,
      weatherType: "Cloudy",
      windSpeed: `10mph`,
    }; //returning an object
  }, []);

  return (
    <main classname="App">
      <header className="TitleStyle">Weather App</header>
      <WeatherCard
        cloudiness={cloudiness}
        currentTemp={currentTemp}
        highTemp={highTemp}
        humidity={humidity}
        lowTemp={lowTemp}
        weatherType={weatherType}
        windSpeed={windSpeed}
      />
    </main>
  );
}

export default Home;
