import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerItems from "../constants/DrawerItems";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Header from '../components/Header';
import AppStack from './AppStack';
import { Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Drawer = createDrawerNavigator();

const renderIcon = (iconType: string, iconName: string, focused: boolean) => {
    switch (iconType !== undefined) {
        case iconType === "Material":
            return (
                <MaterialCommunityIcons
                    name={iconName}
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                />
            )
        case iconType === "Feather":
            return (
                <Feather
                    name={iconName}
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                />
            )
        case iconType === "FontAwesome5":
            return (
                <FontAwesome5
                    name={iconName}
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                />
            )
        default:
            return null
    }
}

const AppDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Profile">
            {
                DrawerItems.map(drawer =>
                    drawer.name === 'QR Scanner' ? (
                        <Drawer.Screen
                            key={drawer.name}
                            name={drawer.name}
                            options={{
                                drawerIcon: ({ focused }) => renderIcon(drawer.iconType, drawer.iconName, focused),
                                headerShown: true,
                                headerTitleAlign: "left",
                                drawerLabel: () => (
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            width: "115%",
                                        }}
                                    >
                                        <Text style={{ fontWeight: "700", fontSize: 14 }}>{drawer.name}</Text>
                                        <Entypo name="chevron-right" size={25} color="black" />
                                    </View>
                                )
                                // header: () => <Header screen="QR Scanner" />,
                            }}
                            component={AppStack}
                        />
                    ) : (
                        <Drawer.Screen
                            key={drawer.name}
                            name={drawer.name}
                            options={{
                                drawerIcon: ({ focused }) => renderIcon(drawer.iconType, drawer.iconName, focused),
                                headerShown: true,
                                header: () => <Header screen={drawer.name} />,
                            }}
                            component={drawer.component}
                        />
                    )
                )
            }
        </Drawer.Navigator>
    )
}

export default AppDrawer
