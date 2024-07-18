import React from 'react'
import { View } from 'react-native'
import { Line, Svg } from 'react-native-svg'

const Chart = () => {
    return (
        <View >
            <Svg >
                <Line
                    stroke={"black"}
                    strokeWidth="2"
                    x1={100}
                    x2={200}
                    y1={100}
                    y2={100}
                />
            </Svg>
        </View>
    )
}

export default Chart
