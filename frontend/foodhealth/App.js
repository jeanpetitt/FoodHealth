import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Start from './screen/Start';
import Home from './screen/Home';
import Recognition from './screen/Recognition';
import Agenda from './screen/Calendar';
import Annotation from './screen/Annotation';
import Search from './screen/Search';
import { Easing } from 'react-native';


const stack = createStackNavigator();
const openConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 20,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 800,
    easing: Easing.ease
  },
};


export default function App(){

  return(
    <NavigationContainer>
      <stack.Navigator  screenOptions={{
        gestureEnable: true,
        transitionSpec: {
          open: openConfig,
          close: closeConfig
        },
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
      }}>
      <stack.Screen name='Start' options={{header: () => null}} component={Start}></stack.Screen>
      <stack.Screen name='Home' options={{title: 'Menu'}} component={Home}></stack.Screen>
      <stack.Screen name='Annotation' component={Annotation}></stack.Screen>
      <stack.Screen name='Recognition' component={Recognition}></stack.Screen>
      <stack.Screen name='Agenda' component={Agenda}></stack.Screen>
      <stack.Screen name='Search' component={Search}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  )
}