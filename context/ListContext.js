import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AccountServices from "../services/account";

export const ListContext = createContext();

const [list, setList] = useState([]);
const [value, setValue] = useState(null);

export const ListProvider = ({ children }) => {
  return (
    <ListContext.Provider value={{ list, value }}>
      {children}
    </ListContext.Provider>
  );
};
