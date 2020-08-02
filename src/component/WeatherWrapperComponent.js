import React from "react";
var moment = require("moment");

// import Brightness1RoundedIcon from "@material-ui/icons/Brightness1Rounded";
// import Brightness3RoundedIcon from "@material-ui/icons/Brightness3Rounded";
// import { yellow } from "@material-ui/core/colors";
function WeatherWrapperComponent({ fullData }) {
  const sunRise = fullData.sunrise * 1000;
  const sunSet = fullData.sunset * 1000;

  console.log(fullData);
  return (
    <div className="weatherWrapper">
      <h2 className="city_txt">{fullData.name}</h2>
      <div className="sunTime">
        <div className="sunrise">
          {moment(new Date().setTime(sunRise)).format("h:mm a")}
          <p className="sunTime__text_color">sunrise</p>
        </div>
        <div className="sunset">
          {moment(new Date().setTime(sunSet)).format("h:mm a")}
          <p className="sunTime__text_color">sunset</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherWrapperComponent;
