import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from './src/pages/Home/index';
import { Informations } from './src/pages/Informations/index';
import { Milkbanks } from './src/pages/Milkbanks/index';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
          <Tabs.Screen  name="Inicio" component={Home}/>
          <Tabs.Screen name="Informações" component={Informations}/>
          <Tabs.Screen name="Bancos de leite" component={Milkbanks}/>
      </Tabs.Navigator> 
    </NavigationContainer>
  );
}