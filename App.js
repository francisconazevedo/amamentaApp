import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Home } from "./src/pages/Home/index";
import { Informations } from "./src/pages/Informations/index";
import { Milkbanks } from "./src/pages/Milkbanks/index";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const InformationStack = createStackNavigator();

const HomeStackScreen = () => (
  <Stack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{ title: "Home" }}
    />
    <InformationStack.Screen
      name="Profile"
      component={Informations}
      options={({ route }) => ({ title: route.params.name })}
    />
  </Stack.Navigator>
);

const InformationStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Informações" component={Informations} />
  </HomeStack.Navigator>
);

const MilkbankStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Bancos de Leite" component={Milkbanks} />
  </HomeStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Bancos de leite") {
              iconName = focused ? "ios-heart" : "ios-heart-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Bancos de leite" component={MilkbankStackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
