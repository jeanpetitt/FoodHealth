import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'


const Button = ({ title, icon, subText, onPress, color }: {title: string, icon: string, subText: string, onPress: any, color: string}) => {

    let textColor, backgroundColor
    color == 'orange' ? (textColor='#fff', backgroundColor='#FAB224') : (textColor='#5B005C', backgroundColor='#fff')

    return (
        <View style={{ marginVertical: 10 }}>
            <Icon.Button
                name={icon}
                color={textColor}
                backgroundColor={backgroundColor}
                style={{ marginVertical: 5, paddingLeft: 20 }}
                onPress={onPress}
            >
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text style={[styles.textBold, {color: `${textColor}`}]}>{title}</Text>
                    <Text style={{ color: `${textColor}` }}>{subText}</Text>
                </View>
            </Icon.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    textBold: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 10
    },
})

export default Button