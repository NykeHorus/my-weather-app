import React, { useState, useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import Weather from "./weather";
import { LoadingContext } from "../Context.js/loadingContext";

function LoadingSpinner() {
  const { isLoading } = useContext(LoadingContext);

  if (isLoading === false) {
    return <Weather />;
  } else
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden align-items-center">Loading...</span>
      </Spinner>
    );
}

export default LoadingSpinner;
