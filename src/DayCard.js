import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
var moment = require("moment");

function DayCard({ reading }) {
  let newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);
  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`;

  return (
    <div className="dayCard__wrapper">
      <Card className="daycard__card" variant="outlined">
        <CardContent>
          <h3 className="card-title">{moment(newDate).format("dddd")}</h3>
          <p className="text-muted">
            {moment(newDate).format("MMMM Do, h:mm a")}
          </p>
          <i className={imgURL} />
          {Math.round(reading.main.temp)} °F
          <p className="card-text">{reading.weather[0].description}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default DayCard;
