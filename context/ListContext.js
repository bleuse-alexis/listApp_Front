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

  const fetchAndSetValue = () => {
    list.map((item) => {
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
  };

  const deleteArticle = (toDelete) => {
    let updatedList = value.article.filter((item) => {
      return item._id !== toDelete;
    });
    setValue({ ...value, article: updatedList });
  };

  const updateCheckState = (isChecked) => {
    let updatedList = value.article.map((item) => {
      if (item._id === isChecked) {
        return { ...item, state: !item.state };
      }
      return item;
    });
    setValue({ ...value, article: updatedList });
  };

  const updateList = () => {
    ListServices.updateList(value._id, value).then(() => {
      fetchAndSetList({ account: value.account });
    });
  };

  useEffect(() => {
    if (value !== null) updateList();
  }, [value]);

  return (
    <ListContext.Provider
      value={{
        list,
        value,
        setValue,
        fetchAndSetList,
        updateCheckState,
        deleteArticle,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
