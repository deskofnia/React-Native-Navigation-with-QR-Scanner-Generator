import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import ScanQRScreen from '../../screens/Scan';

const Stack = createStackNavigator();

const AppStack = () => {

    return (
        <Stack.Navigator initialRouteName={"/"}>
            <Stack.Screen
                name="/"
                component={ScanQRScreen}
                options={{
                    presentation: 'modal',
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