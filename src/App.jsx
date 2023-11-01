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
        <img
          className="header-background"
          src=" weather_icons/background.jpg"
          alt="banner"
        />
        <h1 className="section-heading">Weather Cast</h1>
        <h2 className="section-subheading">European Weather Forecast</h2>
        <p className="copyright">
          Powered by{" "}
          <a href="https://7timer.info/" target="blank">
            <span className="keyword-magnet">7timer</span>
          </a>
        </p>
        <div className="container">
          <LocationsProvider>
            <LoadingProvider>
              <FetchCityProvider>
                <div className="spinner">
                  <LocationSelector />
                  <div className="spinner">
                    <LoadingSpinner />
                  </div>
                </div>
              </FetchCityProvider>
            </LoadingProvider>
          </LocationsProvider>
        </div>
        <footer className="footer">
          <div className="section-divider">
            <img src="./weather_icons/cloudline.png" />
          </div>
          <span> &copy; 2023 WeatherCast.</span>
        </footer>
      </div>
    </>
  );
}

export default App;
