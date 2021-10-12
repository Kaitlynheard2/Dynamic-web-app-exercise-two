import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";

const API_KEY = `6e09301a489266068c89ba255122003e`;

//localhost:3000/?city=paris
//created funciton outside the scope of the function below
//custom abstraction - abstract away URL Search Params here to make it easier to use

function BackgroundColorCloudiness(cloudiness) {
  if (cloudiness <= 5) {
    return `rgb(${163}, ${224}, ${247})`; //yelllow
  }
  if (cloudiness <= 20 && cloudiness > 5) {
    return `rgb(${195}, ${223}, ${232})`; //blue
  }
  if (cloudiness <= 50 && cloudiness > 20) {
    return `rgb(${169}, ${177}, ${201})`; //blue
  }
  if (cloudiness <= 80 && cloudiness > 50) {
    return `rgb(${141}, ${151}, ${181})`; //dark blue
  }
  if (cloudiness <= 100 && cloudiness > 80) {
    return `rgb(${146}, ${149}, ${150}`; //gray
  }
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState();

  let query = useQuery();
  //URL Search Params...
  //google.com/?horse=true&dog=false

  useEffect(() => {
    const cityValue = query.get("city");
    setCity(cityValue);
  }, [query]);

  useEffect(() => {
    //Get Weather Data from Weather API
    if (city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )
        .then(function (response) {
          //successful request... set as weather data
          console.log(response);
          setWeatherData(response.data);
        })
        .catch(function (error) {
          //handle error
          console.log(error);
        });
    }
  }, [city]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherDescription,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    //destructuring the object
    //this is where we process data
    if (!weatherData) return {}; //returning early with an empty object
    return {
      cloudiness: weatherData.clouds.all,
      currentTemp: Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32),
      highTemp: Math.round((weatherData.main.temp_max - 273.15) * (9 / 5) + 32),
      humidity: weatherData.main.humidity,
      lowTemp: Math.round((weatherData.main.temp_min - 273.15) * (9 / 5) + 32),
      weatherDescription: weatherData.weather[0].description,
      weatherType: weatherData.weather[0].main,
      windSpeed: Math.round(weatherData.wind.speed),
    }; //returning an object
  }, [weatherData]);

  const CloudinessColor = BackgroundColorCloudiness(cloudiness); //background color based on cloudiness

  return (
    <main
      className="App"
      style={{
        backgroundColor: CloudinessColor,
        margin: "0",
        padding: "20px",
      }}
    >
      <header>
        <nav className="CitiesWrapper">
          <a className="CityStyle" href="/?city=paris">
            paris
          </a>
          <a className="CityStyle" href="/?city=tokyo">
            tokyo
          </a>
          <a className="CityStyle" href="/?city=new&#32;york&#32;city">
            new york city
          </a>
          <a className="CityStyle" href="/?city=Murrieta">
            murrieta
          </a>
        </nav>
      </header>
      <h1 className="TitleStyle">{city}</h1>
      <WeatherCard
        cloudiness={cloudiness}
        currentTemp={currentTemp}
        highTemp={highTemp}
        humidity={humidity}
        lowTemp={lowTemp}
        weatherDescription={weatherDescription}
        weatherType={weatherType}
        windSpeed={windSpeed}
      />
    </main>
  );
}

export default Home;
