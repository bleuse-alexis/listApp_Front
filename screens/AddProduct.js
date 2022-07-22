import { StyleSheet, Button, View } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackView,
} from "@react-navigation/native-stack";

import CodeScanner from "./CodeScanner";

function AddProduct({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Button
          title={"Scan Article"}
          onPress={() => {
            navigation.navigate("Scanner");
          }}
        />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function AddList() {
  return (
    <Stack.Navigator initialRouteName="AddProduct">
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="Scanner" component={CodeScanner} />
    </Stack.Navigator>
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
