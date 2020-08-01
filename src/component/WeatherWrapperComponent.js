import React from "react";

function WeatherWrapperComponent({
  city,
  country,
  sunrise,
  sunset,
  weatherList,
}) {
  let sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  let sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

  return (
    <div className="weatherWrapper">
      <div className="weatherWrapper__header">
        <h1 className="weatherWrapper_heading">
          {city},{country}
        </h1>
      </div>

      <div className="sunTime">
        <div className="sunriseTime">
          <img src="" alt="" className="sunRise" />
          <p>{sunriseTime}</p>
        </div>
        <div className="sunsetTime">
          <img src="" alt="" className="sunSet" />
          <p>{sunsetTime}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherWrapperComponent;
