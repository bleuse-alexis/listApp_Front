import React, { useState } from "react";
import { View } from "react-native";

import DropDownPicker from "react-native-dropdown-picker";

export default function ListSelector() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [list, setList] = useState([
    { label: "course", value: "course" },
    { label: "soirée", value: "soirée" },
  ]);

  return (
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
  );
}
