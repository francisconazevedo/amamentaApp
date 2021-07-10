import React from 'react';
import {
    createStackNavigator, 
} from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { Mythstruths } from '../pages/Mythstruths';
import { Links } from '../pages/Links';
import { Informations } from '../pages/Informations';
import { HomeTab } from './tabs.routes';

const Stack = createStackNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeTab" component={HomeTab} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Links" component={Links} />
            <Stack.Screen name="Mythstruths" component={Mythstruths} />
            <Stack.Screen name="Informations" component={Informations} />
        </Stack.Navigator>
    );
}

export default HomeStack;