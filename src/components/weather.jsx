import React, { useEffect } from "react";

const Weather = () => {
  let API =
    "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=json";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <>
      <h2>EurOrbit</h2>
    </>
  );
};

export default Weather;
