import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Logo } from '../assets/images';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const item = {
    name: 'Hello',
    expiryDate: '2023-12-31',
    manufacturer: ' Hope you’re doing great. This time I’m gonna share my experience'
}

export default function GenerateQRScreen() {
    return (
        <View style={styles.cardView}>
            <QRCode
                value={JSON.stringify(item)}
                size={250}
                color="black"
                backgroundColor="white"
                getRef={(c) => { }}
                logo={Logo}
                logoBackgroundColor={'white'}
                logoMargin={0}
                logoSize={50}
            // enableLinearGradient={true}
            // linearGradient={['rgb(255,215,0)', 'rgb(255,223,128)']}
            // gradientDirection={["170, 0, 0, 0"]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cardView: {
        width: deviceWidth,
        height: deviceHeight,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 10,
        padding: 25,
        marginLeft: 5,
        marginRight: 5,
        marginTop: '10%',
        backgroundColor: 'white'
    },
})