import React from "react";
import Weather from "./components/weather";
import LocationSelector from "./components/LocationSelector";
import LocationsProvider from "./Context.js/locationsContext";

function App() {
  return (
    <>
      <div>
        <LocationsProvider>
          <LocationSelector />
        </LocationsProvider>
      </div>
      <div className="App">
        <Weather />
      </div>
    </>
  );
}

export default App;
