import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function DayCard({ reading }) {
  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`;

  return (
    <div className="dayCard__wrapper">
      <Card className="daycard__card" variant="outlined">
        <CardContent>
          <i className={imgURL} />
          {Math.round(reading.main.temp)} °F
          <p className="card-text">{reading.weather[0].description}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default DayCard;
