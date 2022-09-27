import React, { useEffect, useState, useContext } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import Feather from "react-native-vector-icons/Feather";

import { ListContext } from "../../context/ListContext";

export default function List() {
  const [data, setData] = useState([]);

  const { value } = useContext(ListContext);

  const fetchAndSet = () => {
    if (value !== null) {
      let list = value.article.map((item) => {
        return { name: item.name, state: item.state };
      });
      setData(list);
    } else {
      setData([]);
    }
  };

  const deleteArticle = (toDelete) => {
    let updatedList = data.filter((item) => {
      return item.name !== toDelete;
    });
    setData(updatedList);
  };

  const updateCheckState = (isChecked) => {
    let updatedList = data.map((item) => {
      if (item.name === isChecked) {
        return { ...item, state: !item.state };
      }
      return item;
    });
    setData(updatedList);
  };

  useEffect(() => {
    fetchAndSet();
  }, [value]);

  if (data.length !== 0) {
    return (
      <ScrollView>
        {data.map((item, index) => (
          <View style={styles.listContainer} key={index}>
            <View style={styles.article}>
              <Text>{item.name}</Text>
            </View>
            <TouchableOpacity
              onPress={() => updateCheckState(item.name)}
              style={styles.checkbox}
            >
              {item.state ? (
                <Feather name="check-square" color="grey" size={20} />
              ) : (
                <Feather name="square" color="grey" size={20} />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteArticle(item.name)}>
              <Feather name="trash" color="grey" size={20} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5%",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  checkbox: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  article: {
    flex: 1,
  },
});
