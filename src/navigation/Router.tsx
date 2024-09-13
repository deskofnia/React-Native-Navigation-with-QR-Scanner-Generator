import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AppDrawer from './AppDrawer';
import "react-native-gesture-handler";


const Router = () => {
    return (
        <NavigationContainer>
            {/* <AppStack /> */}
            <AppDrawer />
        </NavigationContainer>
    )
}

export default Router
