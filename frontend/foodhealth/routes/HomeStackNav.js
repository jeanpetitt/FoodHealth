import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Agenda from "../screens/Agenda";
import Recognition from "../screens/Recognition";
import Annotations from "../screens/Annotations";
import Search from "../screens/Search";

const Stack = createStackNavigator();

const HomeStackNav = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
          headerStyle:{
            backgroundColor: "#d79df2"
          },
        }}
    >
        <Stack.Screen name="Agendas" options={{ title: "Agenda"}} component={Agenda}/>
      </Stack.Navigator>
  );
}

export default HomeStackNav;
