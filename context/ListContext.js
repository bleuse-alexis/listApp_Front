import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState(null);
  return (
    <ListContext.Provider value={{ list, value }}>
      {children}
    </ListContext.Provider>
  );
};
