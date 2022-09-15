import React, { useState, useContext } from "react";
import {
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { AuthContext } from "../../context/AuthContext";
import ListServices from "../../services/list";

export default function AddList({ fetchAndSetList }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [body, setBody] = useState({
    name: "",
    account: "",
  });

  const { userId } = useContext(AuthContext);

  const inputChange = (val) => {
    setBody({
      ...body,
      name: val,
      account: userId,
    });
  };

  const createList = (body) => {
    if (body.name.length === 0) {
      console.log("pas de nom de liste");
    } else {
      ListServices.createList(body).then((res) => {
        console.log(res);
        fetchAndSetList();
        setModalVisible(!modalVisible);
      });
    }
  };

  console.log(body);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Nom de la liste :</Text>
            <View style={styles.action}>
              <TextInput
                style={styles.textInput}
                placeholder="nom de la liste"
                onChangeText={(val) => inputChange(val)}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => createList(body)}
            >
              <Text style={styles.textStyle}>Valider</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Feather name="plus-circle" color="white" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
    backgroundColor: "#6CCFF6",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    color: "#05375a",
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
});