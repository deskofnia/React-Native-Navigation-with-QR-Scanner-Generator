import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HomeStack } from "../Stacks/HomeStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { GoalStack } from "../Stacks/GoalStack";
import AppDrawer from "../Drawers/AppDrawer";


const Tab = createBottomTabNavigator();

const MultiStackTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Drawer"
                component={AppDrawer}
                options={{
                    tabBarLabel: 'Drawer',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="hammer-screwdriver" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home Stack',
                    // tabBarBadge: 3,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="GoalStack"
                component={GoalStack}
                options={{
                    tabBarLabel: 'Goal Stack',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="target" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
};

export default MultiStackTabNavigator