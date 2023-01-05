import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import BboxView from '../components/BboxView'

const Test = () => {
    return (
        <View style={styles.container}>
            
            <BboxView box={{
                name: 'ananas',
                score: 80,
                width: 150,
                height: 250
            }} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'violet'
    },
})

export default Test