import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet } from 'react-native';
import Scan from '../components/Scan';
import Home from '../components/Auth/Home';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName={"/"}>
            <Stack.Screen
                name="/"
                component={Scan}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AppStack;

export const headerStyles = {
    headerStyle: {
        elevation: 0,
    },
    headerTintColor: '#000',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        padding: 10,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
    },
});
