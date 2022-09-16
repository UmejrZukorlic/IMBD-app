import React from "react";
import { createContext } from "react";
import { useState } from "react";

const MovieContext = createContext();
export { MovieContext };

const Context = (props) => {
  const [identity, setIdentity] = useState();
  const [inputTitle, setInputTitle] = useState();
  const [titleName, setTitleName] = useState();
  return (
    <MovieContext.Provider
      value={{
        identity,
        setIdentity,
        titleName,
        setTitleName,
        inputTitle,
        setInputTitle,
      }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default Context;
