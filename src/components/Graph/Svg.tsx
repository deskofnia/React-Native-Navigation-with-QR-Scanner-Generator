import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';


const NativeSvg = () => {
    return (
        // <ScrollView style={{ flex: 1 }}>
        <View
            style={[
                StyleSheet.absoluteFill,
                { alignItems: 'center', justifyContent: 'center' },
            ]}
        >
            {/* <Svg height="50%" width="50%" viewBox="0 0 100 100">
                <Circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="blue"
                    strokeWidth="2.5"
                    fill="green"
                />
                <Rect
                    x="15"
                    y="15"
                    width="70"
                    height="70"
                    stroke="red"
                    strokeWidth="2"
                    fill="yellow"
                />
            </Svg> */}
            <Svg width="200" height="60">
                <Rect
                    x="25"
                    y="5"
                    width="150"
                    height="50"
                    fill="rgb(0,0,255)"
                    strokeWidth="3"
                    stroke="rgb(0,0,0)"
                />
            </Svg>
            <Svg height="100" width="100">
                <Circle cx="50" cy="50" r="50" fill="pink" />
            </Svg>
            <Svg height="100" width="110">
                <Ellipse
                    cx="55"
                    cy="55"
                    rx="50"
                    ry="30"
                    stroke="purple"
                    strokeWidth="2"
                    fill="yellow"
                />
            </Svg>
            <Svg height="100" width="100">
                <Line x1="0" y1="0" x2="100" y2="100" stroke="red" strokeWidth="2" />
            </Svg>
            <Svg height="100" width="100">
                <Polygon
                    points="40,5 70,80 25,95"
                    fill="lime"
                    stroke="purple"
                    strokeWidth="1"
                />
            </Svg>
            <Svg height="100" width="100">
                <Polyline
                    points="10,10 20,12 30,20 40,60 60,70 95,90"
                    fill="none"
                    stroke="black"
                    strokeWidth="3"
                />
            </Svg>
            <Svg height="60" width="200">
                <Text
                    fill="none"
                    stroke="purple"
                    fontSize="20"
                    fontWeight="bold"
                    x="100"
                    y="20"
                    textAnchor="middle">
                    STROKED TEXT
                </Text>
            </Svg>
            <Svg height="100" width="200">
                <G rotation="50" origin="100, 50">
                    <Line x1="60" y1="10" x2="140" y2="10" stroke="#060" />

                    <Rect x="60" y="20" height="50" width="80" stroke="#060" fill="#060" />

                    <Text x="100" y="75" stroke="#600" fill="#600" textAnchor="middle">
                        Text grouped with shapes
                    </Text>
                </G>
            </Svg>
        </View>
        // </ScrollView>
    );
}

export default NativeSvg;

