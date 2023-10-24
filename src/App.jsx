import React from "react";
import Weather from "./components/weather";
import LocationSelector from "./components/LocationSelector";
import LocationsProvider from "./Context.js/locationsContext";
import FetchCityProvider from "./Context.js/fetchCityContext";
import WeatherProvider from "./Context.js/weatherForCast";

function App() {
  return (
    <>
      <div className="App">
        <LocationsProvider>
          <FetchCityProvider>
            <LocationSelector />
            <WeatherProvider />
            <Weather />
          </FetchCityProvider>
        </LocationsProvider>
      </div>
    </>
  );
}

export default App;
