import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";

import { ListContext } from "../../context/ListContext";

import { Dropdown } from "react-native-element-dropdown";

export default function ListSelector() {
  const [isFocus, setIsFocus] = useState(false);
  const [selectedList, setSelectedList] = useState([]);

  const { list, value, setValue } = useContext(ListContext);

  const fetchAndSet = () => {
    setSelectedList(
      list.map((List) => {
        return {
          _id: List._id,
          label: List.name,
          value: List.name,
          article: List.article,
          account: List.account,
        };
      })
    );
  };

  useEffect(() => {
    fetchAndSet();
  }, [isFocus]);

  return (
    <View style={{ width: "70%" }}>
      <Dropdown
        style={{
          borderRadius: 8,
          borderWidth: 0,
          backgroundColor: "#6CCFF6",
        }}
        containerStyle={{
          borderRadius: 8,
          borderWidth: 0,
        }}
        placeholder={value ? value.label : "selectionner une liste"}
        data={selectedList}
        value={value}
        onChange={(item) => {
          setValue(item);
        }}
        labelField="label"
        valueField="value"
        maxHeight={300}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </View>
  );
}
