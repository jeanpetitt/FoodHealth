import { TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'


const IconButton = ({ icon, onPress }: { icon: string, onPress: any }) => {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={{
                borderRadius: 50,
                padding: 10,
                backgroundColor: '#fff',
            }}
        >
            <Icon name={icon} size={13} color='#000' ></Icon>
        </TouchableOpacity>
    )
}

export default IconButton