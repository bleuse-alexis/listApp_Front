import React from "react";
import { TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function DeleteList() {
  return (
    <TouchableOpacity>
      <Feather name="trash-2" color="white" size={40} />
    </TouchableOpacity>
  );
}
