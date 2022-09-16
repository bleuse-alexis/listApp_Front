import React, { useEffect, useState } from "react";

import { View } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function List({ product }) {
  const [data, setData] = useState([]);

  const fetchAndSet = () => {
    if (product !== null) {
      product.article.map((item) => {
        setData((data) => [...data, { name: item, state: false }]);
      });
    }
  };

  console.log(product);
  console.log(data);

  useEffect(() => {
    fetchAndSet();
  }, [product]);

  if (data.length !== 0) {
    return (
      <View>
        {data.map((item, index) => (
          <BouncyCheckbox
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
          />
        ))}
      </View>
    );
  }
}
