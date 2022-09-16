import React, { useState, useEffect } from "react";
import { View } from "react-native";

import { Dropdown } from "react-native-element-dropdown";

export default function ListSelector({ lists, value, setValue }) {
  const [isFocus, setIsFocus] = useState(false);
  const [list, setList] = useState([]);

  const fetchAndSet = () => {
    setList(
      lists.map((List) => {
        return { label: List.name, value: List.name };
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
        placeholder="selectionner une liste"
        data={list}
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
        labelField="label"
        valueField="value"
        maxHeight={300}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />

      {/* <DropDownPicker
        open={open}
        value={value}
        items={list}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setList}
        style={{
          
        }}
      /> */}
    </View>
  );
}
