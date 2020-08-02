import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherWrapperComponent from "./component/WeatherWrapperComponent";
import DayCard from "./DayCard";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";

function App() {
  const [fullData, setfullData] = useState([]);
  const [DailyData, setDailyData] = useState([]);
  const [query, setQuery] = useState("australia");
  const [formValues, setFormValues] = useState({});

  // const [Loading, setLoading] = useState(true);

  useEffect(() => {
    //   effect;
    const getWeather = async () => {
      await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${query}&units=imperial&APPID=${"ce844b724a6d3ebad7e0a8653133cf69"}`
      )
        .then((response) => response.json())
        .then((data) => {
          const dailyData = data.list.filter((reading) =>
            reading.dt_txt.includes("18:00:00")
          );
          setfullData(data.city);
          setDailyData(dailyData);
        });
    };
    getWeather();
    // setLoading(false);
  }, [query]);
  console.log(fullData);
  const handleChange = (event) => {
    // let name = event.target.name;
    let value = event.target.value;

    setFormValues({
      name: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(formValues.name);
  };

  return (
    <div className="App">
      <div className="form__wrapper">
        <Paper elevation={3}>
          <form action="" onSubmit={handleSubmit}>
            <Input
              type="text"
              name="city"
              onChange={handleChange}
              style={{
                margin: "0 auto",
                maxWidth: 800,
              }}
            />
            <button type="submit">Go</button>
          </form>
        </Paper>
      </div>

      <WeatherWrapperComponent fullData={fullData} />
      <div className="dayCard-outerWrapper">
        {DailyData.map((reading, index) => (
          <DayCard reading={reading} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
