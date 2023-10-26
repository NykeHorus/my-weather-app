import React, { useContext } from "react";
import Weather from "./components/weather";
import LocationSelector from "./components/LocationSelector";
import LocationsProvider from "./Context.js/locationsContext";
import FetchCityProvider from "./Context.js/fetchCityContext";
import LoadingProvider from "./Context.js/loadingContext";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  return (
    <>
      <div className="App">
        <LocationsProvider>
          <LoadingProvider>
            <FetchCityProvider>
              <LocationSelector />
              <LoadingSpinner />
            </FetchCityProvider>
          </LoadingProvider>
        </LocationsProvider>
      </div>
    </>
  );
}

export default App;
