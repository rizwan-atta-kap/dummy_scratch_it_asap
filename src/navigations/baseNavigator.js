import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";

const BaseStack = createNativeStackNavigator();

function BaseNavigator() {
  return (
    <NavigationContainer>
      <BaseStack.Navigator
        screenOptions={{
        }}
      >
        <BaseStack.Screen name={"Home"} component={Home} />
      </BaseStack.Navigator>
    </NavigationContainer>
  );
}

export { BaseNavigator };

