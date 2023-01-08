import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const InputText = ({onChange, value, icon, title, type, placeholder}: {onChange: any, value: any, icon:any, title: string, type: any, placeholder: string}) => {

    return (
        <View style={styles.line}>
            <Text style={styles.title}>
                <MaterialCommunityIcons name={icon} color='#CE0670' size={25} />
                {'\t'}
                {title}
            </Text>
            <TextInput
                style={{height: 40}}
                value={value}
                placeholder={placeholder}
                keyboardType={type}
                onChangeText={newText => onChange(newText)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 6,
        elevation: 1,
        marginBottom: 10,
        borderRightColor: '#CE0670',
        borderRightWidth: 5
    },
    title: {
        fontSize: 16,
        color: 'black'
    }
})

export default InputText