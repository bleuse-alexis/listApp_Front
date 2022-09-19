import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View } from "react-native";

import ListSelector from "../components/list/ListSelector";
import ListServices from "../services/list";

import { AuthContext } from "../context/AuthContext";
import AddList from "../components/list/AddList";
import DeleteList from "../components/list/DeleteList";
import List from "../components/list/List";

export default function ProductList() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState(null);

  const { userId } = useContext(AuthContext);

  const body = { account: userId };

  function fetchAndSetList() {
    ListServices.getList(body)
      .then((result) => {
        setList(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchAndSetList();
  }, [userId]);

  return (
    <View style={styles.container}>
      <View style={styles.listSelector}>
        <ListSelector lists={list} value={value} setValue={setValue} />
        <AddList fetchAndSetList={fetchAndSetList} />
        <DeleteList
          value={value}
          fetchAndSetList={fetchAndSetList}
          setValue={setValue}
        />
      </View>
      <View style={styles.list}>
        <List product={value} />
      </View>
      <View style={styles.button}></View>
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
  button: {
    flex: 0.7,
    backgroundColor: "red",
    width: "30%",
    marginLeft: 400,
    marginBottom: 10,
  },
});
