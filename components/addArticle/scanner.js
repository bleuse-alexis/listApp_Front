import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import SearchService from "../../services/search";
import ListServices from "../../services/list";

import { ListContext } from "../../context/ListContext";

export default function CodeSCanner() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [product, setProduct] = useState({});

  const [body, setBody] = useState({
    name: "",
    image: "",
    brand: "",
    state: false,
  });

  const { fetchAndSetList, value, setValue } = useContext(ListContext);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    SearchService.getProduct(data).then((res) => setProduct(res));
  };

  const addArticle = () => {
    setBody({
      name: product.product_name_fr,
      image: product.image_front_url,
      brand: product.brands,
      state: false,
    });
  };

  useEffect(() => {
    if (body.name !== "") {
      console.log(body);

      ListServices.addArticle(value._id, body).then(() => {
        setValue((prevValue) => ({
          ...prevValue,
          article: [...prevValue.article, body],
        }));
        fetchAndSetList({ account: value.account });
      });
      setBody({
        name: "",
        image: "",
        brand: "",
        state: false,
      });
      setProduct({});
    }
  }, [body]);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  console.log(product);

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && product !== false && (
        <View style={styles.containerScanned}>
          <Image
            style={{ width: "60%", height: "60%" }}
            source={{ uri: product.image_front_url }}
          />
          <Text style={styles.baseText}>{product.product_name_fr}</Text>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.buttonYes}
              onPress={() => {
                setScanned(false);
                addArticle();
              }}
            >
              <Text style={styles.textStyle}>Ajouter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonNo}
              onPress={() => {
                setScanned(false);
                setProduct({});
              }}
            >
              <Text style={styles.textStyle}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {scanned && product === false && (
        <View style={styles.containerScanned}>
          <Text style={styles.baseText}>Le produit n'est pas reconnu</Text>
          <TouchableOpacity
            style={styles.buttonNo}
            onPress={() => {
              setScanned(false);
              setProduct({});
            }}
          >
            <Text style={styles.textStyle}>OK</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerScanned: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonYes: {
    margin: 20,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
    backgroundColor: "#6CCFF6",
  },
  buttonNo: {
    margin: 20,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
