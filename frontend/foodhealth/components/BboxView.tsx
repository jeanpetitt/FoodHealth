import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export type BoxType = {
    name: string,
    score: number,
    width: number,
    height: number,
    ymin: number,
    xmin: number
}

const BboxView = ({box}: {box: BoxType}) => {
    return (
        <View 
            style={[
                styles.container, 
                { 
                    width: box.width, 
                    height: box.height,
                    transform: [
                        {
                            translateX: box.xmin,
                        },
                        {
                            translateY: box.ymin
                        }
                    ]
                }]}>
            <View style={styles.textBg}>
                <Text style={styles.text}>{box.name}, {box.score}%</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: 'rgba(255, 255, 255, .2)',
        borderRadius: 4
    },
    textBg: {
        backgroundColor: '#fff',
        padding: 4,
    },
    text: {
        color: '#000'
    }
})

export default BboxView