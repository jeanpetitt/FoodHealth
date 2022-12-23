import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './screens/Start';


const Startstack = createStackNavigator();

export default function StartStackScreen(){
    return (
        <Startstack.Navigator>
            <Startstack.Screen name='Start' component={Start}/>
        </Startstack.Navigator>
    )
}

