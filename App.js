import React, { useEffect } from "react";
import {StatusBar} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/routes";

export default function App() {
 
  return (
    <NavigationContainer>
      <StatusBar hidden={false} />
      <Routes />
    </NavigationContainer>
  );
}
