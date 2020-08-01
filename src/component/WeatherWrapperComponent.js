import React from "react";
import Brightness1RoundedIcon from "@material-ui/icons/Brightness1Rounded";
import Brightness3RoundedIcon from "@material-ui/icons/Brightness3Rounded";
import { yellow } from "@material-ui/core/colors";
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
          <Brightness1RoundedIcon
            fontSize="large"
            style={{ color: yellow[500] }}
          />
          <p>{sunriseTime}</p>
        </div>
        <div className="sunsetTime">
          <img src="" alt="" className="sunSet" />
          <Brightness3RoundedIcon
            fontSize="large"
            style={{ color: yellow[500] }}
          />
          <p>{sunsetTime}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherWrapperComponent;
