import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useRef, useState } from 'react';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;


export default function ScanQRScreen() {
    const [scan, setScan] = useState(false);
    const [scanResult, setScanResult] = useState(false);
    const [result, setResult] = useState<any>();
    const scannerRef = useRef<any>(null);

    const onSuccess = (e: any) => {
        console.log("eeeeeeeeeeeeeeee=============", e)
        setResult(e);
        setScan(false);
        setScanResult(true);
    };

    const activeQR = () => {
        setScan(true);
    };

    const scanAgain = () => {
        setScan(true);
        setScanResult(false);
    };

    return (
        <View style={styles.scrollViewStyle}>
            {!scan && !scanResult && (
                <View style={styles.cardView}>
                    <Text numberOfLines={8} style={styles.descText}>
                        Please move your camera {"\n"} over the QR Code
                    </Text>
                    <Image source={require('../assets/images/qrCode.png')} style={{ margin: 20 }} />
                    <TouchableOpacity onPress={activeQR} style={styles.buttonScan}>
                        <View style={styles.buttonWrapper}>
                            <Image source={require('../assets/images/camera.png')} style={{ height: 36, width: 36, marginRight: 20 }} />

                            <Text style={{ ...styles.buttonTextStyle, color: '#2196f3' }}>Scan QR Code</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            )
            }
            {
                scanResult && (
                    <>
                        <Text style={styles.textTitle1}>Result</Text>
                        <View style={scanResult ? styles.scanCardView : styles.cardView}>
                            <Text style={{ color: "black" }}> {result.data}</Text>

                            <TouchableOpacity onPress={scanAgain} style={styles.buttonScan}>
                                <View style={styles.buttonWrapper}>
                                    <Image source={require('../assets/images/camera.png')} style={{ height: 36, width: 36, marginRight: 20 }} />
                                    <Text style={{ ...styles.buttonTextStyle, color: '#2196f3' }}>Click to scan again</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </>
                )
            }
            {
                scan && (
                    <QRCodeScanner
                        reactivate={true}
                        showMarker={true}
                        ref={scannerRef}
                        onRead={onSuccess}
                        topContent={
                            <Text style={styles.centerText}>
                                Please move your camera {"\n"} over the QR Code
                            </Text>
                        }
                        bottomContent={
                            <View>
                                <TouchableOpacity
                                    onPress={() => scannerRef.current.reactivate()}
                                    onLongPress={() => setScan(false)}>
                                    <Text>Click to Re Activate or Hold to close</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                )
            }
        </View >
    );
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#2196f3'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '10%',
        paddingLeft: 15,
        paddingTop: 10,
        width: deviceWidth,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 16,
        color: 'white'
    },
    textTitle1: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 16,
        color: 'white'
    },
    cardView: {
        width: deviceWidth - 32,
        height: deviceHeight - 350,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        padding: 25,
        marginLeft: 5,
        marginRight: 5,
        marginTop: '10%',
        backgroundColor: 'white'
    },
    scanCardView: {
        width: deviceWidth - 32,
        height: deviceHeight / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 25,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: 'white'
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonScan: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#258ce3',
        paddingTop: 5,
        paddingRight: 25,
        paddingBottom: 5,
        paddingLeft: 25,
        marginTop: 20
    },
    buttonScan2: {
        marginLeft: deviceWidth / 2 - 50,
        width: 100,
        height: 100,
    },
    descText: {
        padding: 16,
        textAlign: 'center',
        fontSize: 16,
        color: "black"
    },
    highlight: {
        fontWeight: '700',
    },
    centerText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        padding: 32,
        color: 'white',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    bottomContent: {
        width: deviceWidth,
        height: 120,
    },
    buttonTouchable: {
        fontSize: 21,
        backgroundColor: 'white',
        marginTop: 32,
        width: deviceWidth - 62,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44
    },
    buttonTextStyle: {
        color: 'black',
        fontWeight: 'bold',
    }
})