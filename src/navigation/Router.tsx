import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import MultiStackTabNavigator from '../views/Navigators/MultiStackTabNavigator';


const Router = () => {
    return (
        <NavigationContainer>
            <MultiStackTabNavigator />
        </NavigationContainer>
    )
}

export default Router
