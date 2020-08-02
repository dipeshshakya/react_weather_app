import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherWrapperComponent from "./component/WeatherWrapperComponent";
import DayCard from "./DayCard";
// Api_key = "ce844b724a6d3ebad7e0a8653133cf69";
// const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${Api_key}`;

function App() {
  const [fullData, setfullData] = useState([]);
  const [DailyData, setDailyData] = useState([]);

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    //   effect;
    const getWeather = async () => {
      await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=australia&units=imperial&APPID=${"ce844b724a6d3ebad7e0a8653133cf69"}`
      )
        .then((response) => response.json())
        .then((data) => {
          const dailyData = data.list.filter((reading) =>
            reading.dt_txt.includes("18:00:00")
          );
          setfullData(data.list);
          setDailyData(dailyData);
        });
    };
    getWeather();
    setLoading(false);
  }, []);
  console.log(DailyData);

  return (
    <div className="App">
      <WeatherWrapperComponent />
      <div className="dayCard-outerWrapper">
        {DailyData.map((reading, index) => (
          <DayCard reading={reading} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
