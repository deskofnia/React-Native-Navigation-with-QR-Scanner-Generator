import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Pressable, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import OutsidePressHandler from "react-native-outside-press";

const Home = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "pink" }}>
                <Pressable onPress={() => console.log("Parent Pressable - Event Triggered!")}>
                    {/* Child Pressable */}
                    <View style={{ borderRadius: 8, backgroundColor: "yellow", padding: 10, marginBottom: 8 }}>
                        <Pressable
                            onPress={() => console.log("Child Pressable - Direct Event")}
                        >
                            <View style={{ backgroundColor: "orange", padding: 10 }}>
                                <Text style={{ fontSize: 20 }}>
                                    Pressable
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                    {/* Child TouchableOpacity */}
                    <View style={{ borderRadius: 8, backgroundColor: "yellow", padding: 10, marginBottom: 8 }}>
                        <View
                            // onStartShouldSetResponder={() => true}
                            // onResponderRelease={() => console.log("Parent Pressable - Event Triggered!")}
                        >
                            <TouchableOpacity
                                onPress={() => console.log("Child TouchableOpacity - Direct Event")}
                                style={{ backgroundColor: "orange", padding: 10 }}
                            >
                                <Text style={{ fontSize: 20 }}>
                                    TouchableOpacity
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Child TouchableHighlight */}
                    <View style={{ borderRadius: 8, backgroundColor: "yellow", padding: 10, marginBottom: 8 }}>
                        <View
                            // onStartShouldSetResponder={() => true}
                            // onResponderRelease={() => console.log("Parent Pressable - Event Triggered!")}
                        >
                            <TouchableHighlight
                                onPress={() => console.log("Child TouchableHighlight - Direct Event")}
                                style={{ backgroundColor: "orange", padding: 10 }}
                            >
                                <Text style={{ fontSize: 20 }}>
                                    TouchableHighlight
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    {/* Child TouchableWithoutFeedback */}
                    <View style={{ borderRadius: 8, backgroundColor: "yellow", padding: 10, marginBottom: 8 }}>
                        <View
                        // onStartShouldSetResponder={() => true}
                        // onResponderRelease={() => console.log("Parent Pressable - Event Triggered!")}
                        >
                            <TouchableWithoutFeedback
                                onPress={() => console.log("Child TouchableWithoutFeedback - Direct Event")}
                            >
                                <View style={{ backgroundColor: "orange", padding: 10 }}>
                                    <Text style={{ fontSize: 20 }}>
                                        TouchableWithoutFeedback
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </Pressable>
            </View>

            {/* <View >
                <OutsidePressHandler
                    onOutsidePress={() => {
                        console.log("Pressed outside the box!");
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                        }}
                    >
                        <View
                        // style={{
                        //     flexDirection: "row",
                        //     alignItems: "center",
                        //     justifyContent: "space-between",
                        //     gap: 10,
                        //     paddingVertical: 5,
                        //     paddingHorizontal: 10,
                        //     borderBottomColor: "#eeeeef",
                        //     borderBottomWidth: 1,
                        // }}
                        >
                            <Text style={{ color: "#000", fontSize: 16 }}>{"profile"}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                        }}
                    >
                        <View
                        // style={{
                        //     flexDirection: "row",
                        //     alignItems: "center",
                        //     justifyContent: "space-between",
                        //     gap: 10,
                        //     paddingVertical: 5,
                        //     paddingHorizontal: 10,

                        // }}
                        >
                            <Text style={{ color: "#000", fontSize: 16 }}>{"settings"}</Text>
                        </View>
                    </TouchableOpacity>

                </OutsidePressHandler>
            </View> */}

        </>
    )
}

export default Home;

const styles = StyleSheet.create({
    settingsPopup: {
        borderRadius: 12,
        shadowColor: "#171717",
        elevation: 20,
        backgroundColor: "#fff",
        position: "absolute",
        top: 70,
        left: 30,
        width: 150,
        zIndex: 1,
        borderColor: "#ccc",
        borderWidth: 1,
    },
});
