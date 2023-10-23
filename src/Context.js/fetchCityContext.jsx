import React, { createContext, useState } from "react";

export const FetchCityContext = createContext({});

export const FetchCityProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState({
    latitude: 52.367,
    longitude: 4.904,
  });
  //console.log({ coordinates });

  return (
    <FetchCityContext.Provider value={{ coordinates, setCoordinates }}>
      {children}
    </FetchCityContext.Provider>
  );
};

export default FetchCityProvider;
