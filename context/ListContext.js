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
        result.data.map((item) => {
          if (value !== null) {
            if (item._id === value._id) {
              setValue({
                _id: item._id,
                label: item.name,
                value: item.name,
                article: item.article,
                account: item.account,
              });
            }
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ListContext.Provider value={{ list, value, setValue, fetchAndSetList }}>
      {children}
    </ListContext.Provider>
  );
};
