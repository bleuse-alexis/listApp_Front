import { StyleSheet, Text, View } from "react-native";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.baseText}> profile </Text>
      </View>
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
    color: "black",
  },
});
