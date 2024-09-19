import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import { DrawerNavigationProp } from '@react-navigation/drawer';

type RootParamList = {
    Home: any;
    Profile: any;
};

type DrawerNavigation = DrawerNavigationProp<RootParamList>;

const Header = ({ screen }: any) => {
    const navigation = useNavigation<DrawerNavigation>();

    return (
        <View style={headerStyles.container}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Entypo name="menu" size={24} color="black" />
            </TouchableOpacity>
            <View>
                <Text>{screen}</Text>
            </View>
        </View>
    )
}

export default Header;

const headerStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#fa7da7',
        elevation: 5,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
