import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";

const Stack = createStackNavigator();

function HomeRoute({ navigation }: any) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <View style={{ gap: 5 }}>
                <Text>Same Stack</Text>
                <Button title="Go to Feed" onPress={() => navigation.navigate("feed")}></Button>
                <Button title="Go to Profile" onPress={() => navigation.navigate("profile")}></Button>
                <Button title="Go to Notifications" onPress={() => navigation.navigate("notifications")}></Button>
                <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
            </View>
            <View style={{ gap: 5 }}>
                <Text>Other Stack</Text>
                <Button title="Go to Goal" onPress={() => navigation.navigate("goal")}></Button>
                <Button title="Go to Goal History" onPress={() => navigation.navigate("goalHistory")}></Button>
                <Button title="Go to Details" onPress={() => navigation.navigate("goalDetails")}></Button>
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
            <Stack.Group >
                <Stack.Screen
                    name="homeRoute"
                    component={HomeRoute}
                    options={{
                        headerShown: true,
                        headerTitle: "Home Stack",
                        headerTitleAlign: "center"
                        // header: () => null,
                    }}
                />
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen
                    name="feed"
                    component={Feed}
                    options={{
                        presentation: 'modal',
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name="profile"
                    component={Profile}
                    options={{
                        presentation: 'card',
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name="notifications"
                    component={Notifications}
                    options={{
                        presentation: 'modal',
                        headerShown: true,
                    }}
                />
            </Stack.Group>
        </Stack.Navigator >
    )
}