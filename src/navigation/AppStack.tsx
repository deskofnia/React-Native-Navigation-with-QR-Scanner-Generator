import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Alarms from '../screens/Alarms';
import Edit from '../screens/Edit';
import Ring from '../screens/Ring';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName={"Alarms"}>

            <Stack.Screen
                name="Alarms"
                component={Alarms}
                options={params => ({
                    ...headerStyles,
                    title: 'Alarms',
                    headerRight: () => (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => params.navigation.navigate('Edit')}
                            underlayColor="#fff"
                        >
                            <Text style={styles.buttonText}>{'+ '}</Text>
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name="Edit"
                component={Edit}
                options={{ ...headerStyles, title: 'Alarm' }}
            />
            <Stack.Screen
                name="Ring"
                component={Ring}
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
