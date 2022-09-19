import React, { useEffect, useState } from "react";

import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import Feather from "react-native-vector-icons/Feather";

export default function List({ product }) {
  const [data, setData] = useState([]);

  const fetchAndSet = () => {
    if (product !== null) {
      product.article.map((item) => {
        setData((data) => [...data, { name: item, state: false }]);
      });
    }
  };

  const updateCheckState = (isChecked) => {
    data.map((item) => {
      if (isChecked === item.name) {
        setData([...data, { state: !item.state }]);
      }
    });
  };

  console.log(data);

  useEffect(() => {
    fetchAndSet();
  }, [product]);

  if (data.length !== 0) {
    return (
      <View>
        {data.map((item, index) => (
          <View style={styles.listContainer} key={index}>
            <View>
              <Text>{item.name}</Text>
            </View>
            <TouchableOpacity onPress={() => updateCheckState(item.name)}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
