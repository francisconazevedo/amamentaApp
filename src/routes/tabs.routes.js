import React from 'react';
import {
    createStackNavigator,
} from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../pages/Home';
import Milkbanks from '../pages/Milkbanks';
import Ionicons from "react-native-vector-icons/Ionicons";

const Tabs = createBottomTabNavigator();

export const HomeTab = () => {
    return (
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
    )
}
