import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

const Stack = createStackNavigator();

function HomeRoute({ navigation }: { navigation: DrawerNavigationHelpers }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <View style={{ gap: 5 }}>
                <Text>Same Stack</Text>
                <Button title="Go to Feed" onPress={() => navigation.navigate("HomeStack", { screen: "feed" })}></Button>
                <Button title="Go to Profile" onPress={() => navigation.navigate("HomeStack", { screen: "profile" })}></Button>
                <Button title="Go to Notifications" onPress={() => navigation.navigate("HomeStack", { screen: "notifications" })}></Button>
                <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
            </View>
            <View style={{ gap: 5 }}>
                <Text>Other Stack</Text>
                <Button title="Go to Goal" onPress={() => navigation.navigate("GoalStack", { screen: "goal" })}></Button>
                <Button title="Go to Goal History" onPress={() => navigation.navigate("GoalStack", { screen: "goalHistory" })}></Button>
                <Button title="Go to Details" onPress={() => navigation.navigate("GoalStack", { screen: "goalDetails" })}></Button>
                <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
            </View>
        </View>
    );
}


function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Text>Feed!</Text>
        </View>
    );
}

function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Text>Profile!</Text>
        </View>
    );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Text>Notifications!</Text>
        </View>
    );
}

export const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName={"homeRoute"}>
            <Stack.Group screenOptions={{ presentation: 'card', headerShown: true, }}>
                <Stack.Screen
                    name="homeRoute"
                    component={HomeRoute}
                    options={{
                        headerTitle: "Home Stack",
                        headerTitleAlign: "center"
                    }}
                />
            </Stack.Group>
            <Stack.Group screenOptions={{ headerShown: true, presentation: 'modal', }}>
                <Stack.Screen
                    name="feed"
                    component={Feed}
                />
                <Stack.Screen
                    name="profile"
                    component={Profile}
                />
                <Stack.Screen
                    name="notifications"
                    component={Notifications}
                />
            </Stack.Group>
        </Stack.Navigator >
    )
}