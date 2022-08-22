import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AddProduct from "./screens/AddProduct";
import ProductList from "./screens/ProductList";

import AuthStackScreen from "./screens/authScreens/AuthStack";

export default function App() {
  //const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <AuthStackScreen />
      {/* <Stack.Navigator headerMode="none">
        <Stack.Screen name="Auth" component={AuthStackScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
