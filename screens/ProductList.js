import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View } from "react-native";

import ListServices from "../services/list";

import { AuthContext } from "../context/AuthContext";
import { ListContext } from "../context/ListContext";

import AddList from "../components/list/AddList";
import DeleteList from "../components/list/DeleteList";
import List from "../components/list/List";
import ListSelector from "../components/list/ListSelector";

export default function ProductList() {
  const { userId } = useContext(AuthContext);
  const { fetchAndSetList } = useContext(ListContext);

  const body = { account: userId };

  useEffect(() => {
    fetchAndSetList(body);
  }, [userId]);

  return (
    <View style={styles.container}>
      <View style={styles.listSelector}>
        <ListSelector />
        <AddList />
        <DeleteList />
      </View>
      <View style={styles.list}>
        <List />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
  baseText: {
    fontSize: 20,
    color: "black",
  },
  listSelector: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#6CCFF6",
  },
  list: {
    flex: 10,
  },
});
