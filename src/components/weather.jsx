import React, { useEffect, useContext, useState } from "react";
import { FetchCityContext } from "../Context.js/fetchCityContext";
import { LocationsContext } from "../Context.js/locationsContext";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Weather = () => {
  const { coordinates } = useContext(FetchCityContext);
  const { locations } = useContext(LocationsContext);
  const cods = locations.at(coordinates);
  const [newdatas, setNewdatas] = useState([]);

  //console.log({ coordinates });

  let API = `http://www.7timer.info/bin/api.pl?lon=${cods.latitude}&lat=${cods.longitude}&product=civillight&output=json`;

  useEffect(() => {
    const fetchApiData = async () => {
      await fetch(API)
        .then((response) => response.json())
        .then((data) => setNewdatas(data));
    };
    fetchApiData();
  }, [cods]);

  const timer = setTimeout(() => {
    console.log(newdatas.dataseries);
    return () => clearTimeout(timer);
  }, 5000);

  //newdatas.map((newdata) => {
  //console.log(newdata);
  //});
  //console.log(cods.latitude);

  return (
    <>
      <h2>EurOrbit</h2>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>{newdatas.city}</Card.Title>
            <Card.Text>{newdatas.city}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default Weather;
