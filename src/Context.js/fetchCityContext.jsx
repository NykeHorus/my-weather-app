import React, { createContext, useContext, useState, useEffect } from "react";
import { LocationsContext } from "../Context.js/locationsContext";
import { LoadingContext } from "../Context.js/loadingContext";

export const FetchCityContext = createContext({});

export const FetchCityProvider = ({ children }) => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { locations } = useContext(LocationsContext);
  const [newdatas, setNewdatas] = useState([]);
  const [coordinates, setCoordinates] = useState({
    latitude: 52.367,
    longitude: 4.904,
  });
  const cods = locations.at(coordinates);
  //console.log(cods.latitude);
  let API = `http://www.7timer.info/bin/api.pl?lon=${cods.latitude}&lat=${cods.longitude}&product=civillight&output=json`;

  //Gets data from the api everytime a city  is selected
  useEffect(() => {
    const fetchApiData = async () => {
      await fetch(API)
        .then((response) => response.json())
        .then((data) => {
          setNewdatas(data.dataseries);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const timer = setTimeout(() => {
      fetchApiData();
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [API]);

  //console.log(isLoading);

  return (
    <FetchCityContext.Provider value={{ newdatas, setCoordinates }}>
      {children}
    </FetchCityContext.Provider>
  );
};

export default FetchCityProvider;
