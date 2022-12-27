import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import Start from "./screens/Start";
import { useWindowDimensions } from "react-native";
import Home from "./screens/Home";
import Agenda from "./screens/Agenda";
import Recognition from "./screens/Recognition";
import Annotations from "./screens/Annotations";
import Search from "./screens/Search";
import CustomerDrawerContent from "./components/CustomerDrawerContent";

const Drawer = createDrawerNavigator()

export default function App() {
  const dimension = useWindowDimensions()
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={props => <CustomerDrawerContent {...props}/>
        } 
        screenOptions={{
          headerStyle:{
            backgroundColor: "#d79df2"
          }
        }}>
        <Drawer.Screen name="Start" component={Start}></Drawer.Screen>
        <Drawer.Screen name="FoodHealth" component={Home}/>
        <Drawer.Screen name="Annotation" component={Annotations}/>
        <Drawer.Screen name="Recognition" component={Recognition}/>
        <Drawer.Screen name="Search" component={Search}/>
        <Drawer.Screen name="Agenda" component={Agenda}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


