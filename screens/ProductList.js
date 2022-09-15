import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View } from "react-native";

import ListSelector from "../components/ListSelector";
import ListServices from "../services/list";

import { AuthContext } from "../context/AuthContext";

export default function ProductList() {
  const [list, setList] = useState([]);

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
      <ListSelector style={styles.listSelector} lists={list} />
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
