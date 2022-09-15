import React, { useState, useEffect } from "react";
import { View } from "react-native";

import DropDownPicker from "react-native-dropdown-picker";

export default function ListSelector({ lists }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [list, setList] = useState([]);

  const fetchAndSet = () => {
    setList(
      lists.map((List) => {
        return { label: List.name, value: List.name };
      })
    );
  };
  /*   [
    { label: "course", value: "course" },
    { label: "soirée", value: "soirée" },
  ] */

  console.log(lists);

  useEffect(() => {
    fetchAndSet();
  }, [lists]);

  return (
    <View style={{ width: "80%" }}>
      <DropDownPicker
        open={open}
        value={value}
        items={list}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setList}
        placeholder="selectionner une liste"
        style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderWidth: 0,

          backgroundColor: "#6CCFF6",
        }}
      />
    </View>
  );
}
