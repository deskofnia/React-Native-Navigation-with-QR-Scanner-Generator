import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

const Stack = createStackNavigator()


function StackRoute({ navigation }: { navigation: DrawerNavigationHelpers }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <View style={{ gap: 5 }}>
                <Text>Same Stack</Text>
                <Button title="Go to Goal" onPress={() => navigation.navigate("GoalStack", { screen: "goal" })}></Button>
                <Button title="Go to Goal History" onPress={() => navigation.navigate("GoalStack", { screen: "goalHistory" })}></Button>
                <Button title="Go to Details" onPress={() => navigation.navigate("GoalStack", { screen: "goalDetails" })}></Button>
                <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
            </View>
            <View style={{ gap: 5 }}>
                <Text>Other Stack</Text>
                <Button title="Go to Feed" onPress={() => navigation.navigate("HomeStack", { screen: "feed" })}></Button>
                <Button title="Go to Profile" onPress={() => navigation.navigate("HomeStack", { screen: "profile" })}></Button>
                <Button title="Go to Notifications" onPress={() => navigation.navigate("HomeStack", { screen: "notifications" })}></Button>
                <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
            </View>
        </View>
    );
}

function Goal() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Text>Goal!</Text>
        </View>
    );
}

function GoalHistory() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Text>GoalHistory!</Text>
        </View>
    );
}

function GoalDetails() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Text>GoalDetails!</Text>
        </View>
    );
}

export const GoalStack = () => {
    return (
        <Stack.Navigator initialRouteName={"stackRoute"}>
            <Stack.Group screenOptions={{
                headerShown: true,
            }}>
                <Stack.Screen
                    name="stackRoute"
                    component={StackRoute}
                    options={{
                        headerTitle: "Goal Stack",
                        headerTitleAlign: "center"
                    }}
                />
            </Stack.Group>
            <Stack.Group
                screenOptions={{
                    presentation: 'modal',
                    headerShown: true,
                    headerTitle: "Goal Items"
                }}>
                <Stack.Screen
                    name="goal"
                    component={Goal}
                />
                <Stack.Screen
                    name="goalHistory"
                    component={GoalHistory}
                />
                <Stack.Screen
                    name="goalDetails"
                    component={GoalDetails}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}