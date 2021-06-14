import React from "react";
import { View, Text, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button:{

    }
});

const ScreenContainer = ({children}) => (
    <View>
        <Text> {children} </Text>
    </View>
)

export const Informations = () => (
    <ScreenContainer/>
)