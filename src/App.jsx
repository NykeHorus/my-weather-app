import React from "react";
import Weather from "./components/weather";
import LocationSelector from "./components/LocationSelector";
import LocationsProvider from "./Context.js/locationsContext";
import FetchCityProvider from "./Context.js/fetchCityContext";

function App() {
  return (
    <>
      <div className="App">
        <LocationsProvider>
          <FetchCityProvider>
            <LocationSelector />
            <Weather />
          </FetchCityProvider>
        </LocationsProvider>
      </div>
    </>
  );
}

export default App;
