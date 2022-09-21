import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import Scanner from "../components/addArticle/scanner";
import Form from "../components/addArticle/form";

export default function AddProduct({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.select}>
        <TouchableOpacity onPress={Scanner}>
          <Text>Scanner de code barre</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.select}>
        <TouchableOpacity>
          <Text>Formulaire d'ajout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  baseText: {
    fontSize: 20,
    color: "#fdfefe",
  },
  select: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
