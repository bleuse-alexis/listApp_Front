import React, { useState } from "react";

import { View } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function List() {
  const [data, setData] = useState([
    { name: "orange", state: false },
    { name: "banane", state: false },
    { name: "pomme", state: false },
    { name: "café", state: false },
  ]);

  console.log(data);

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
