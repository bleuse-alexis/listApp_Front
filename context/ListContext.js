import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ListServices from "../services/list";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState(null);

  const fetchAndSetList = (body) => {
    ListServices.getList(body)
      .then((result) => {
        setList(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateList = () => {
    console.log(value);
    ListServices.updateList(value._id, value).then(() => {
      fetchAndSetList({ account: value.account });
    });
  };

  return (
    <ListContext.Provider
      value={{ list, value, setValue, fetchAndSetList, updateList }}
    >
      {children}
    </ListContext.Provider>
  );
};
