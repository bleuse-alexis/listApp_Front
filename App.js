import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Option from "./screens/Option";
import AddProduct from "./screens/AddProduct";
import ProductList from "./screens/ProductList";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Add Product" component={AddProduct} />
        <Tab.Screen name="Product list" component={ProductList} />
        <Tab.Screen name="Option" component={Option} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
