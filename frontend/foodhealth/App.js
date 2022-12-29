import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import DrawerNav from "./routes/DrawerNav";



export default function App() {
  const dimension = useWindowDimensions()
  return (
    <NavigationContainer>
      <DrawerNav></DrawerNav>
    </NavigationContainer>
  );
}


