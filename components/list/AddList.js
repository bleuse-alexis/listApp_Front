import React from "react";
import { TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function AddList() {
  return (
    <TouchableOpacity>
      <Feather name="plus-circle" color="white" size={40} />
    </TouchableOpacity>
  );
}
