import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";

const NewsContext = createContext();
export { NewsContext };

const Context = (props) => {
  const [identity, setIdentity] = useState();
  return (
    <NewsContext.Provider value={{ identity, setIdentity }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default Context;
