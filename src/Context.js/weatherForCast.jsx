import React, { createContext, useContext, useState } from "react";
import { FetchCityContext } from "./fetchCityContext";

export const weatherContext = createContext({});

const WeatherProvider = ({ children }) => {
  const { newdatas } = useContext(FetchCityContext);
  const [weatherIcons, setWeatherIcon] = useState("");
  //console.log(newdatas);

  newdatas.map((newdata) => {});

  console.log(weatherIcons);

  return (
    <weatherContext.Provider value={{ weatherIcons }}>
      {children}
    </weatherContext.Provider>
  );
};
export default WeatherProvider;
