import React, { createContext, useEffect, useState } from "react";
import Papa from "papaparse";

export const LocationsContext = createContext({});
const LocationsProvider = ({ children }) => {
  const [locations, setLocations] = useState([""]);

  useEffect(() => {
    Papa.parse("src/assets/city_coordinates.csv", {
      download: true,
      header: true,
      complete: function (result) {
        setLocations(result.data);
      },
    });
  }, []);

  //console.log(locations[0].country);
  return (
    <LocationsContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationsContext.Provider>
  );
};

export default LocationsProvider;
