import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import Scanner from "../components/addArticle/scanner";
import Form from "../components/addArticle/form";
import AddList from "../components/list/AddList";
import DeleteList from "../components/list/DeleteList";
import ListSelector from "../components/list/ListSelector";

export default function AddProduct() {
  const [scanner, setScanner] = useState(false);
  const [form, setForm] = useState(false);

  if (scanner === true) {
    return (
      <View>
        <Scanner />
      </View>
    );
  }

  if (form === true) {
    return (
      <View>
        <Form />
      </View>
    );
  }
  if (!scanner && !form) {
    return (
      <View style={styles.container}>
        <View style={styles.listSelector}>
          <ListSelector />
          <AddList />
          <DeleteList />
        </View>
        <View style={styles.selector}>
          <View style={styles.select}>
            <TouchableOpacity onPress={() => setScanner(!scanner)}>
              <Text>Scanner de code barre</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.select}>
            <TouchableOpacity onPress={() => setForm(!form)}>
              <Text>Formulaire d'ajout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
  selector: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  listSelector: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#6CCFF6",
  },
  containerOnPress: {
    flex: 10,
    flexDirection: "column",
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
