import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';
import Recognition from './screens/Recognition';
import Agenda from './screens/Calendar';
import Annotation from './screens/Annotation';
import Search from './screens/Search';

const Homestack = createStackNavigator();

export default function HomestackScreen(){
    return (
        <Homestack.Navigator>
            <Homestack.Screen name='Home' component={Home}/>
            <Homestack.Screen name='Annotation' component={Annotation}/>
            <Homestack.Screen name='Recognition' component={Recognition}/>
            <Homestack.Screen name='Agenda' component={Agenda}/>
            <Homestack.Screen name='Search' component={Search}/>
        </Homestack.Navigator>
    )
}