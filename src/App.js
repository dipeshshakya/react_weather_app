import React, { useEffect } from "react";
import "./App.css";
import WeekComponent from "./component/WeekComponent";
// Api_key = "ce844b724a6d3ebad7e0a8653133cf69";
// const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${Api_key}`;

function App() {
  useEffect(() => {
    //   effect;
    getWeather();
    //   return () => {
    //     cleanup;
    //   };
  }, []);

  const getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=london&units=imperial&APPID=${"ce844b724a6d3ebad7e0a8653133cf69"}`
    );
    const response = await api_call.json();
    console.log(response);
  };
  return (
    <div className="App">
      <WeekComponent />
    </div>
  );
}

export default App;
