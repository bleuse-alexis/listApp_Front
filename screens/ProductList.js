import React from "react";

import { StyleSheet, View } from "react-native";

import ListSelector from "../components/ListSelector";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <ListSelector style={styles.listSelector} />
      <View style={styles.list}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    fontSize: 20,
    color: "black",
  },
  listSelector: {
    flex: 1,
    backgroundColor: "#009387",
    color: "#397367",
  },
  list: {
    flex: 10,
    backgroundColor: "#fff",
  },
});
