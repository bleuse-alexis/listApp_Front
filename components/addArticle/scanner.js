import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Button,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import SearchService from "../../services/search";

export default function CodeSCanner() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [product, setProduct] = useState({});

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

  console.log(product);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
      </View>
    );
  }
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <View style={styles.containerScanned}>
          <Image
            style={{ width: "60%", height: "60%" }}
            source={{ uri: product.image_front_url }}
          />
          <Text style={styles.baseText}>{product.product_name_fr}</Text>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.buttonYes}
              onPress={() => setScanned(false)}
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
