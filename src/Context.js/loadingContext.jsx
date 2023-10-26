import React, { useState, createContext } from "react";

export const LoadingContext = createContext({});

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  //console.log(isLoading);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
