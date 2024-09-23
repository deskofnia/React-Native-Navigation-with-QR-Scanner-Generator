import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";

const Stack = createStackNavigator()


function StackRoute({ navigation }: any) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <View style={{ gap: 5 }}>
                <Text>Same Stack</Text>
                <Button title="Go to Goal" onPress={() => navigation.navigate("goal")}></Button>
                <Button title="Go to Goal History" onPress={() => navigation.navigate("goalHistory")}></Button>
                <Button title="Go to Details" onPress={() => navigation.navigate("goalDetails")}></Button>
                <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
            </View>
            <View style={{ gap: 5 }}>
                <Text>Other Stack</Text>
                <Button title="Go to Feed" onPress={() => navigation.navigate("feed")}></Button>
                <Button title="Go to Profile" onPress={() => navigation.navigate("profile")}></Button>
                <Button title="Go to Notifications" onPress={() => navigation.navigate("notifications")}></Button>
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
            <Stack.Group>
                <Stack.Screen
                    name="stackRoute"
                    component={StackRoute}
                    options={{
                        headerShown: true,
                        headerTitle: "Goal Stack",
                        headerTitleAlign: "center"
                        // header: () => null,
                    }}
                />
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen
                    name="goal"
                    component={Goal}
                    options={{
                        presentation: 'modal',
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name="goalHistory"
                    component={GoalHistory}
                    options={{
                        presentation: 'card',
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name="goalDetails"
                    component={GoalDetails}
                    options={{
                        presentation: 'card',
                        headerShown: true,
                    }}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}