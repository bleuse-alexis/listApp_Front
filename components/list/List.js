import React, { useEffect, useState } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import Feather from "react-native-vector-icons/Feather";

export default function List({ product }) {
  const [data, setData] = useState([]);

  const fetchAndSet = () => {
    if (product !== null) {
      let list = product.article.map((item) => {
        return { name: item, state: false };
      });
      setData(list);
    }
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

  console.log(data);

  useEffect(() => {
    fetchAndSet();
  }, [product]);

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
          </View>

          /* <BouncyCheckbox
            key={index}
            fillColor="red"
            unfillColor="#FFF"
            text={item.name}
            iconStyle={{ borderColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
            onPress={(isChecked) => {
              item.state = isChecked;
              setData([...data]);
            }}
          /> */
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
