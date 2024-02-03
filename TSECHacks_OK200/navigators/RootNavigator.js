import * as React from "react";
import { Text } from "react-native";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import FormPart1 from "../screens/FormPart1";
import FormPart2 from "../screens/FormPart2";
import FormPart3 from "../screens/FormPart3";
import Eligibility from "../screens/Eligibility";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Posts from "../screens/Posts";
import Profile from "../screens/Profile";
import NgoList from "../screens/NgoList";
import ChatScreen from "../screens/ChatScreen";
import ChatUserLists from "../screens/ChatUserLists";
import NgoDetailsScreen from "../screens/NgoDetailsScreen";
import ChatbotScreen from "../screens/ChatBotScreen";
import DonatedNgoList from "../screens/DonatedNgoList";
import FavList from "../screens/FavList";
import ReportListScreen from "../screens/ReportListScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="App Name">
      <Stack.Screen
        name="FormPart1"
        component={FormPart1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormPart2"
        component={FormPart2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormPart3"
        component={FormPart3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="App Name"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Eligibility"
        component={Eligibility}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatUserLists"
        component={ChatUserLists}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NgoList"
        component={NgoList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NgoDetailsScreen"
        component={NgoDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReportList"
        component={ReportListScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Welcome") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "ChatBotScreen") {
            iconName = focused ? "chatbox-sharp" : "chatbox-outline";
          } else if (route.name === "Posts") {
            iconName = focused ? "newspaper-sharp" : "newspaper-outline";
          } else if (route.name === "MyCSR") {
            iconName = focused ? "briefcase-sharp" : "briefcase-outline";
          } else if (route.name === "Profile") {
            iconName = focused
              ? "person-circle-sharp"
              : "person-circle-outline";
          }
          return <Ionicons name={iconName} size={24} color={"#305F72"} />;
        },
        tabBarLabel: ({ focused, color }) => {
          let label;

          if (route.name === "Welcome") {
            label = "Home";
          } else if (route.name === "ChatBotScreen") {
            label = "Help";
          } else if (route.name === "Posts") {
            label = "Posts";
          } else if (route.name === "MyCSR") {
            label = "My CSR";
          } else if (route.name === "Profile") {
            label = "Profile";
          }

          return <Text>{label}</Text>;
        },
        activeTintColor: "#305F72",
        inactiveTintColor: "#305F72",
        showLabel: true,
        showIcon: true,
      })}
    >
      <Tab.Screen
        name="Welcome"
        component={StackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ChatBotScreen"
        component={ChatbotScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MyCSR"
        component={FavList}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
