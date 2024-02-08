import "./App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { getWeatherData } from "./data/weatherapi.js";
import { BsClouds, BsSearch } from "react-icons/bs";

function App() {
  const [cityName, setCityName] = useState("resistencia");
  const [weatherData, setWeatherData] = useState(null);

  const getData = async () => {
    try {
      const data = await getWeatherData(cityName);
      setWeatherData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="container2">
        <Typography variant="h4" gutterBottom className="tittle">
          Weather App <BsClouds />
        </Typography>
        <div>
          <TextField
            id="standard-basic"
            label="Ingresa tu ciudad"
            variant="standard"
            onChange={(e) => {
              setCityName(e.target.value);
            }}
          />
          {console.log(cityName)}
          <button type="button" onClick={() => getData()} className="button">
            <BsSearch className="button2" />
          </button>
          {weatherData !== null ? (
            <div>
              <h4>Live Weather Condition</h4>
              <h3>{weatherData.weather[0].main}</h3>
              <div>
                <h1>
                  {parseFloat(weatherData.main.temp - 273.15).toFixed(1)}&deg;C
                </h1>
              </div>
              <div>
                <h3>
                  <i></i>
                  {weatherData.name} | {weatherData.sys.country}
                </h3>
              </div>
              <div>
                <h6>
                  Min:
                  {parseFloat(weatherData.main.temp_min - 273.15).toFixed(1)}
                  &deg;C || Max:
                  {parseFloat(weatherData.main.temp_max - 273.15).toFixed(1)}
                  &deg;C || Humidity: {weatherData.main.humidity}%
                </h6>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
