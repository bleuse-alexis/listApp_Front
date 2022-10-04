import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
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
    SearchService.getProduct(data).then((res) => {
      console.log(res);
      /*       setProduct(res);
       */
    });
  };

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <View style={styles.container}>
          {/*           <Text style={styles.baseText}>{product.product_name_fr}</Text>
           */}
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
  baseText: {
    fontSize: 20,
    color: "#fdfefe",
  },
});
