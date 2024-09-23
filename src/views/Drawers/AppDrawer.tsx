import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import DrawerItems from "../../constants/DrawerItems";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Header from '../../components/Header';
import { Image, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { MyAppLogo } from '../../assets/images';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
import { DrawerDescriptorMap, DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';


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

type IProps = {
    state: DrawerNavigationState<ParamListBase>;
    navigation: DrawerNavigationHelpers;
    descriptors: DrawerDescriptorMap;
};

export const CustomDrawerContent = (props: IProps) => {
    return (
        <DrawerContentScrollView {...props}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                }}
            >
                <Image source={MyAppLogo} style={{ backgroundColor: "black" }} />
                <Entypo name="circle-with-cross" size={25} color="black" onPress={() => props.navigation.closeDrawer()} />
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
};

const AppDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Profile" drawerContent={(props) => <CustomDrawerContent {...props} />} >
            {
                DrawerItems.map(drawer => (
                    <Drawer.Screen
                        key={drawer.name}
                        name={drawer.name}
                        options={{
                            drawerIcon: ({ focused }) => renderIcon(drawer.iconType, drawer.iconName, focused),
                            headerShown: true,
                            header: () => <Header screen={drawer.name} />,
                            drawerLabel: ({ focused }) => (
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: "115%",
                                    }}
                                >
                                    <Text style={{ fontWeight: "700", fontSize: 14 }}>{drawer.name}</Text>
                                    {
                                        focused &&
                                        <Entypo name="chevron-right" size={25} color="black" />
                                    }
                                </View>
                            ),
                        }}
                        component={drawer.component}
                    />
                ))
            }
        </Drawer.Navigator>
    )
}

export default AppDrawer
