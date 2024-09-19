import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import AppDrawer from './AppDrawer';


const Router = () => {
    return (
        <NavigationContainer>
            <AppDrawer />
        </NavigationContainer>
    )
}

export default Router
