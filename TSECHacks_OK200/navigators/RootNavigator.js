import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormPart1 from "../screens/FormPart1";
import FormPart2 from "../screens/FormPart2";
import FormPart3 from "../screens/FormPart3";
import Eligibility from "../screens/Eligibility";
import Welcome from "../screens/Welcome";
import Login from "../screens/login";
import Posts from "../screens/Posts";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="App Name">
      <Stack.Screen name="FormPart1" component={FormPart1} />
      <Stack.Screen name="FormPart2" component={FormPart2} />
      <Stack.Screen name="FormPart3" component={FormPart3} />
      <Stack.Screen name="Eligibility" component={Eligibility} />
      <Stack.Screen name="App Name" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Posts" component={Posts} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
