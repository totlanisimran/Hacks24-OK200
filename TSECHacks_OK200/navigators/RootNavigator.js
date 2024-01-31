import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormPart1 from "../screens/FormPart1";
import FormPart2 from "../screens/FormPart2";
import FormPart3 from "../screens/FormPart3";
import Eligibility from "../screens/Eligibility";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FormPart1" component={FormPart1} />
      <Stack.Screen name="FormPart2" component={FormPart2} />
      <Stack.Screen name="FormPart3" component={FormPart3} />
      <Stack.Screen name="Eligibility" component={Eligibility} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
