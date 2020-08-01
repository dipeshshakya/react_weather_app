import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherWrapperComponent from "./component/WeatherWrapperComponent";
// Api_key = "ce844b724a6d3ebad7e0a8653133cf69";
// const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${Api_key}`;

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [weatherList, setweatherList] = useState({});

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    //   effect;
    const getWeather = async () => {
      await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=london&units=imperial&APPID=${"ce844b724a6d3ebad7e0a8653133cf69"}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
          setCity(data.city.name);
          setCountry(data.city.country);
          setSunrise(data.city.sunrise);
          setSunset(data.city.sunset);
          setweatherList(data.list);
        });
    };
    getWeather();
    setLoading(false);
  }, []);

  return (
    <div className="App">
      {!Loading && (
        <WeatherWrapperComponent
          weather={weather}
          city={city}
          country={country}
          sunrise={sunrise}
          sunset={sunset}
          weatherList={weatherList}
        />
      )}
    </div>
  );
}

export default App;
