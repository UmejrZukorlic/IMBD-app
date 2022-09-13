import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";

const MovieContext = createContext();
export { MovieContext };

const Context = (props) => {
  const [identity, setIdentity] = useState();
  return (
    <MovieContext.Provider value={{ identity, setIdentity }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default Context;
