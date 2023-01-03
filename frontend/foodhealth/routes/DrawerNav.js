import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react';
// import Start from "../screens/Start";
// import Agenda from "../screens/Agenda";
// import Recognition from "../screens/Recognition";
// import Annotations from "../screens/Annotations";
// import Search from "../screens/Search";
import BottomTabNav from "./BottomTabNav";
import HomeStackNav from "./HomeStackNav";
import CustomerDrawerContent from "./CustomerDrawerContent";



const Drawer = createDrawerNavigator()

const DrawerNav = () => {
  return (
     <Drawer.Navigator 
        drawerContent={props => <CustomerDrawerContent {...props}/>
        } 
        screenOptions={{
          headerShown: false
        }}>
        <Drawer.Screen name="Home" component={BottomTabNav}/>
        <Drawer.Screen name="Agenda" component={HomeStackNav}/> 
        {/* <Drawer.Screen name="Start" component={Start}></Drawer.Screen> */}
        {/* <Drawer.Screen name="Annotation" component={Annotations}/>
        <Drawer.Screen name="Recognition" component={Recognition}/>
        <Drawer.Screen name="Search" component={Search}/>*/}
     </Drawer.Navigator>
  );
}

export default DrawerNav;
