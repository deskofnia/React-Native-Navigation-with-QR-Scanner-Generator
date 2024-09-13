import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerItems from "../constants/DrawerItems";
import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";
import SavedScreen from "../screens/Saved";
import ReferScreen from "../screens/Refer";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Header from '../components/Header';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Profile"
        >
            {
                DrawerItems.map(drawer =>
                    <Drawer.Screen
                        key={drawer.name}
                        name={drawer.name}
                        options={{
                            drawerIcon: ({ focused }) =>
                                drawer.iconType === 'Material' ?
                                    <MaterialCommunityIcons
                                        name={drawer.iconName}
                                        size={24}
                                        color={focused ? "#e91e63" : "black"}
                                    />
                                    :
                                    drawer.iconType === 'Feather' ?
                                        <Feather
                                            name={drawer.iconName}
                                            size={24}
                                            color={focused ? "#e91e63" : "black"}
                                        />
                                        :
                                        <FontAwesome5
                                            name={drawer.iconName}
                                            size={24}
                                            color={focused ? "#e91e63" : "black"}
                                        />
                            ,
                            headerShown: true,
                            header: ({ options }) => {
                                console.log("=====", options.header)

                                return (
                                    <Header screen={drawer.name} />
                                );
                            },
                        }}
                        component={drawer.name === 'Profile' ? ProfileScreen
                            : drawer.name === 'Settings' ? SettingsScreen
                                : drawer.name === 'Saved Items' ? SavedScreen
                                    : ReferScreen}
                    />)
            }
        </Drawer.Navigator>
    )
}

export default AppDrawer
