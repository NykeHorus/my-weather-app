import React, { useEffect, useContext, useState } from "react";
import { FetchCityContext } from "../Context.js/fetchCityContext";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Weather = () => {
  const { newdatas } = useContext(FetchCityContext);

  console.log(newdatas);

  return (
    <>
      <CardGroup>
        {newdatas.map((newdata, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Title>
                {new Date(
                  newdata.date
                    .toString()
                    .replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")
                ).toDateString()}
              </Card.Title>
              <Card.Img
                variant="bottom"
                src={`weather_icons/${newdata.weather}.png`}
                alt={newdata.weather}
              />
              <div className="gap-3">
                <Card.Text className="fw-bold text-center">
                  {newdata.weather}
                </Card.Text>
                <Card.Text className="fw-bold text-center">
                  max: {newdata.temp2m.max}°C <br /> min: {newdata.temp2m.min}°C
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
