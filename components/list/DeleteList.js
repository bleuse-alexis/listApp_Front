import React, { useContext, useState, useEffect } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";

import { AuthContext } from "../../context/AuthContext";
import ListServices from "../../services/list";

export default function DeleteList({ value, fetchAndSetList, setValue }) {
  const [modalVisible, setModalVisible] = useState(false);

  const { userId } = useContext(AuthContext);

  const [body, setBody] = useState({
    name: "",
    account: "",
  });

  const deleteList = () => {
    if (body.name.length == 0) {
      console.log("pas de liste selectionné");
    } else {
      ListServices.deleteList(body).then((res) => {
        console.log(res);
        fetchAndSetList();
        setValue(null);
        setModalVisible(!modalVisible);
      });
    }
  };

  useEffect(() => {
    if (value === null) {
      setBody({ ...body, name: "", account: userId });
    } else {
      setBody({
        ...body,
        name: value.value,
        account: userId,
      });
    }
  }, [modalVisible]);

  return (
    <View>
      <Modal
        animationInTiming={1000}
        animationOutTiming={1000}
        transparent={true}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Voulez vous supprimer la liste "{body.name}"
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => deleteList(body)}
              >
                <Text style={styles.textStyle}>Oui</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Non</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Feather name="trash-2" color="white" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
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
    marginLeft: 20,
    marginRight: 20,
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
});
