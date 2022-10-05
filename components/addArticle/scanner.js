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
          <Button
            title={"Tap to Scan Again"}
            onPress={() => {
              setScanned(false);
              setProduct({});
            }}
          />
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
  },
});
