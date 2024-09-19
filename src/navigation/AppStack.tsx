import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScanQRScreen from '../screens/Scan';

const Stack = createNativeStackNavigator();

const AppStack = () => {

    return (
        <Stack.Navigator initialRouteName={"/"}>
            <Stack.Screen
                name="/"
                component={ScanQRScreen}
                options={{
                    headerShown: true,
                    header: () => null,

                }}
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