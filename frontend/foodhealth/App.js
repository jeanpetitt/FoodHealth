import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import Start from "./screens/Start";
import Home from "./screens/Home";

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Start" component={Start}></Drawer.Screen>
        <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


