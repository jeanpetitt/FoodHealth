
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Start from './screens/Start';
import Home from './screens/Home';
import Recognition from './screens/Recognition';
import Agenda from './screens/Calendar';
import Annotation from './screens/Annotation';
import Search from './screens/Search';
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
        headerStyle: {
          backgroundColor: '#A0BCF3'
        },
        gestureEnable: true,
        transitionSpec: {
          open: openConfig,
          close: closeConfig
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIos
      }}>
        <stack.Screen name='Start' options={{header: () => null}} component={Start}></stack.Screen>
        <stack.Screen name='Home' component={Home}></stack.Screen>
        <stack.Screen name='Annotation' component={Annotation}></stack.Screen>
        <stack.Screen name='Recognition' component={Recognition}></stack.Screen>
        <stack.Screen name='Agenda' component={Agenda}></stack.Screen>
        <stack.Screen name='Search' component={Search}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
 
  )
}