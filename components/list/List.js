import React, { useEffect, useContext } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";

import { ListContext } from "../../context/ListContext";

export default function List() {
  const { value, setValue, updateList } = useContext(ListContext);

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

  useEffect(() => {
    if (value !== null) updateList();
  }, [value]);

  if (value !== null) {
    return (
      <ScrollView>
        {value.article.map((item, index) => (
          <View style={styles.listContainer} key={index}>
            <View style={styles.article}>
              <Text>{item.name}</Text>
            </View>
            <TouchableOpacity
              onPress={() => updateCheckState(item._id)}
              style={styles.checkbox}
            >
              {item.state ? (
                <Feather name="check-square" color="grey" size={20} />
              ) : (
                <Feather name="square" color="grey" size={20} />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteArticle(item._id)}>
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
