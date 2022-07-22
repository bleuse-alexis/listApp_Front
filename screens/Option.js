import { StyleSheet, Text, View } from "react-native";

export default function Option() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.baseText}> Option Page </Text>
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
    color: "#fdfefe",
  },
});
