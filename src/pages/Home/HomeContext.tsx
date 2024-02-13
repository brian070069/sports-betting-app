import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./HomeReducer";

export const HomeContext = createContext({});

const HomeContextProvider = ({ children }) => {
  return (
    <HomeContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
