import React, { useContext, useState } from "react";
import { LocationsContext } from "../Context.js/locationsContext";
import Form from "react-bootstrap/Form";

const LocationSelector = () => {
  const { locations, setLocations } = useContext(LocationsContext);
  const [selectedcountry, setSelectedcountry] = useState([locations[1]]);

  //Event handler to retrieve the selected country
  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedcountry(e.target.value);
  };
  //console.log({ selectedcountry });

  // Filter the cities for the selected country
  const cities_for_selectedcountry = locations.filter((local) => {
    return local.country === selectedcountry;
  });
  console.log({ cities_for_selectedcountry });

  return (
    <div>
      <label htmlFor="location_country" size="lg">
        Select Country:
      </label>
      <Form.Select
        id="location_country"
        value={locations.country}
        onClick={handleChange}
        size="lg"
      >
        {locations.map((location) => (
          <option key={location.id}>{location.country}</option>
        ))}
      </Form.Select>
      <br />
      <label htmlFor="location_city" size="sm">
        Select city:
      </label>
      <Form.Select id="location_city" size="sm">
        {cities_for_selectedcountry.map((city_for_selectedcountry) => (
          <option key={cities_for_selectedcountry.city}>
            {city_for_selectedcountry.city}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default LocationSelector;
