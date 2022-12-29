import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from "../screens/Home";
import Annotations from "../screens/Annotations";
import Recognition from "../screens/Recognition";
import Search from "../screens/Search";
import Agenda from "../screens/Agenda";
import { MaterialCommunityIcons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'FoodHealth') {
          iconName = focused
          ? 'home'
          : 'home';
        } 
        else if (route.name === 'Annotation') {
        iconName = focused
        ? 'image-edit-outline'
        : 'image-edit-outline';
      }else if (route.name === 'Recognition'){
        iconName = focused
          ? 'line-scan'
          : 'line-scan';
      }
      else if (route.name === 'Search'){
        iconName = focused
          ? 'text-box-search-outline'
          : 'text-box-search-outline';
      }
      return <MaterialCommunityIcons name={iconName} size={size} color={color}     />;
      },
      headerStyle:{
        backgroundColor: "#d79df2"
      },

      })}
    >
        <Tab.Screen name="FoodHealth" component={Home}/>
        <Tab.Screen name="Annotation" component={Annotations}/>
        <Tab.Screen name="Recognition" component={Recognition}/>
        <Tab.Screen name="Search" component={Search}/>
    </Tab.Navigator>
  );
}

export default BottomTabNav;

styles = StyleSheet.create({
    container: {

    }
})