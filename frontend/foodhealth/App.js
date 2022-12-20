import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './screen/Start';
import Home from './screen/Home';
import Recognition from './screen/Recognition';
import Agenda from './screen/Calendar';
import Annotation from './screen/Annotation';


const stack = createStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen name='Start' component={Start}></stack.Screen>
      <stack.Screen name='Home' component={Home}></stack.Screen>
      <stack.Screen name='Annotation' component={Annotation}></stack.Screen>
      <stack.Screen name='Recognition' component={Recognition}></stack.Screen>
      <stack.Screen name='Agenda' component={Agenda}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  )
}