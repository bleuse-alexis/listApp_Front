import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackView,
} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AddProduct from "./screens/AddProduct";
import ProductList from "./screens/ProductList";

import AuthStackScreen from "./screens/authScreens/AuthStack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
