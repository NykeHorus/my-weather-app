import React, { useEffect, useContext, useState } from "react";
import { FetchCityContext } from "../Context.js/fetchCityContext";
import { weatherContext } from "../Context.js/weatherForCast";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Weather = () => {
  const { newdatas } = useContext(FetchCityContext);
  const { weatherIcons } = useContext(weatherContext);
  //console.log(newdatas);

  return (
    <>
      <h2>EurOrbit</h2>
      <CardGroup>
        {newdatas.map((newdata) => (
          <Card>
            <Card.Body>
              <Card.Title>{newdata.date}</Card.Title>
              <Card.Img
                variant="bottom"
                src={`weather_icons/${newdata.weather}.png`}
                alt={newdata.weather}
              />
              <div class="gap-3">
                <Card.Text class="fw-bold text-center">
                  {newdata.weather}
                </Card.Text>
                <Card.Text class="fw-bold text-center">
                  max: {newdata.temp2m.max}°C | min: {newdata.temp2m.min}°C
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </>
  );
};

export default Weather;
