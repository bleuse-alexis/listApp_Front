import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [product, setProduct] = useState({ product_name_fr: "" });
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const getProduct = (data) => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
      .then(function (result) {
        return result.json();
      })
      .then(function (result) {
        if (result.status === 1) {
          setProduct(result.product);
        } else {
          fetch(`https://world.openbeautyfacts.org/api/v0/product/${data}.json`)
            .then(function (result) {
              return result.json();
            })
            .then(function (result) {
              if (result.status === 1) {
                setProduct(result.product);
              } else {
                setProduct({ product_name_fr: `L'article n'est pas reconnu` });
              }
            });
        }
      });
  };

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    getProduct(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <View>
          <Button
            title={"Tap to Scan Again"}
            onPress={() => {
              setScanned(false);
              setProduct({ product_name_fr: "" });
            }}
          />
          <Text style={styles.baseText}>{product.product_name_fr}</Text>
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
