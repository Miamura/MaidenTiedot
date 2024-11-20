import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FlagWeather.css";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);
  const api_key = "2a9e5e2006bcbac94d3dc813cb12988a";

  useEffect(() => {
    if (!capital || capital === "N/A" || !api_key) {
      console.log("Invalid capital or missing API key.");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`;

    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        setWeather({
          location: data.name,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          temperature: data.main.temp,
          condition: data.weather[0].description,
          wind: data.wind.speed,
        });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [capital, api_key]);

  return weather ? (
    <div className="weather-container">
      <h2>Weather in {weather.location}</h2>
      <img src={weather.icon} alt="weather_icon" />
      <h3>Condition: {weather.condition}</h3>
      <h3>Temperature: {weather.temperature}&deg;C</h3>
      <h3>Wind: {weather.wind} m/s</h3>
    </div>
  ) : (
    <p>Loading weather data...</p>
  );
};

export default Weather;
