import { NavigationContainer } from "@react-navigation/native";
import React from 'react'
import AppStack from "./AppStack";

const Router = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}

export default Router
