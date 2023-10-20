import React, { createContext, useEffect, useState } from "react";
import Papa from "papaparse";

export const LocationsContext = createContext({});

const LocationsProvider = ({ children }) => {
  const callback = useEffect(() => {
    Papa.parse("src/assets/city_coordinates.csv", {
      download: true,
      header: true,
      complete: function (result) {
        setLocations(result.data);
      },
    });
  }, []);
  const [locations, setLocations] = useState([]);
  //console.log({ locations });
  return (
    <LocationsContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationsContext.Provider>
  );
};

export default LocationsProvider;
