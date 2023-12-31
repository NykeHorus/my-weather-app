import React, { useContext, useState } from "react";
import { LocationsContext } from "../Context.js/locationsContext";
import { FetchCityContext } from "../Context.js/fetchCityContext";

import Form from "react-bootstrap/Form";
import { LoadingContext } from "../Context.js/loadingContext";

const LocationSelector = () => {
  const { locations, setLocations } = useContext(LocationsContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [selectedcountry, setSelectedcountry] = useState(locations[3]);
  const { setCoordinates } = useContext(FetchCityContext);

  //Event handler to retrieve the selected country
  const handleChange = (e) => {
    //console.log(e.target.value);
    setSelectedcountry(e.target.value);
    setIsLoading(true);
  };
  //console.log({ selectedcountry });

  // function to Filter the cities for the selected country
  const cities_for_selectedcountry = locations.filter((local) => {
    return local.country === selectedcountry;
  });

  //console.log({ cities_for_selectedcountry });

  //Event handler to retrieve the selected city to provide the coordinates
  const handleChange2 = (e) => {
    //console.log(e.target.value);
    setCoordinates(e.target.value);
    setIsLoading(true);
  };
  //console.log(isLoading);

  return (
    <div>
      <label htmlFor="location_country" size="lg">
        Select Country:
      </label>
      <Form.Select
        id="location_country"
        value={locations.country}
        onChange={handleChange}
        disabled={isLoading}
        size="lg"
        className="container select-css"
      >
        {locations.map((location) => (
          <option key={location.id}>{location.country}</option>
        ))}
      </Form.Select>
      <br />
      <label htmlFor="{cities_for_selectedcountry.id}" size="sm">
        Select city:
      </label>
      <Form.Select
        id="{cities_for_selectedcountry.id}"
        size="sm"
        onChange={handleChange2}
      >
        {cities_for_selectedcountry.map((city_for_selectedcountry) => (
          <option
            key={city_for_selectedcountry.id}
            value={city_for_selectedcountry.id}
          >
            {city_for_selectedcountry.city}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default LocationSelector;
