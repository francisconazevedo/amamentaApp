import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Home } from "./src/pages/Home";
import { Informations } from "./src/pages/Informations";
import { Milkbanks } from "./src/pages/Milkbanks";
import { Register } from "./src/pages/Register";
import { Link } from "./src/pages/Links";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const MilkbankStack = createStackNavigator();
const RegisterStack = createStackNavigator();
const InformationStack = createStackNavigator();
const LinkStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const InformationStackScreen = () => (
  <InformationStack.Navigator>
    <InformationStack.Screen name="Informações" component={Informations} />
  </InformationStack.Navigator>
);

const MilkbankStackScreen = () => (
  <MilkbankStack.Navigator>
    <MilkbankStack.Screen name="Bancos de Leite" component={Milkbanks} />
  </MilkbankStack.Navigator>
);

const RegisterStackScreen = () => (
  <RegisterStack.Navigator>
    <RegisterStack.Screen name="Register" component={Register} />
  </RegisterStack.Navigator>
);

const LinkStackScreen = () => (
  <LinkStack.Navigator>
    <LinkStack.Screen name="Link" component={Link} />
  </LinkStack.Navigator>
);
const HomeTab = () => (
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
    <Tabs.Screen name="Home" component={Home} />
    <Tabs.Screen name="Bancos de leite" component={Milkbanks} />
  </Tabs.Navigator>
);


export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>

        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Links" component={Links} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
