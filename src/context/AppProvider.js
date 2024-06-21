import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";

const initialState = {
  globalProperty: "IND",
};

const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(() => {
    const storedState = localStorage.getItem("globalState");
    return storedState ? JSON.parse(storedState) : initialState;
  });

  const updateGlobalState = (newState) => {
    setGlobalState(newState);
  };

  useEffect(() => {
    localStorage.setItem("globalState", JSON.stringify(globalState));
  }, [globalState]);

  return (
    <AppContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
