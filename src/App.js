import React, { useEffect, useState } from "react";
import "./App.css";
import WeekComponent from "./component/WeekComponent";
// Api_key = "ce844b724a6d3ebad7e0a8653133cf69";
// const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${Api_key}`;

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    //   effect;
    const getWeather = async () => {
      await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=london&units=imperial&APPID=${"ce844b724a6d3ebad7e0a8653133cf69"}`
      )
        .then((response) => response.json())
        .then((data) => setWeather(data));
    };
    getWeather();
  }, []);

  return (
    <div className="App">
      <WeekComponent weather={weather} />
    </div>
  );
}

export default App;
