import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { View, StyleSheet, Pressable} from 'react-native';
import { Drawer, Text, } from 'react-native-paper';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

const CustomerDrawerContent = (props) => {

    // function to


  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContentContainer}>
            <Pressable 
                style={{flexDirection: 'row'}}
                onPress={() => props.navigation.closeDrawer()}
              >
                <MaterialCommunityIcons name='menu' style={styles.navIcon}></MaterialCommunityIcons>
                <Text style={{
                  fontSize: 28,
                  marginLeft: 15,
                  color: '#6B6B6B',
                  fontWeight:  'bold'
                }}>Menu</Text>
              </Pressable>
        </View>
        {/* body section drawer */}
        <Drawer.Section showDivider={false} style={styles.drawerBodySection}>
            <DrawerItem 
                label='Home'
                onPress={() => props.navigation.navigate('FoodHealth')}
                icon={(color, size) => 
                <MaterialCommunityIcons 
                    color={color}
                    size={size} name="home"
/>}
            />
            <DrawerItem 
                label='Annotation'
                onPress={() => props.navigation.navigate('Annotation')}
                icon={(color, size) => <MaterialCommunityIcons 
                    name="image-edit-outline"
                    color={color} size={size}
                />}
            />
            <DrawerItem 
                label='Recognition'
                icon={(color, style) => <MaterialCommunityIcons 
                name="line-scan"
                color={color} style={style}
                onPress={() => props.navigation.navigate('Recognition')}

                />}
            />
            <DrawerItem 
                label='Search'
                onPress={() => props.navigation.navigate('Search')}
                icon={(color, size) => <MaterialCommunityIcons 
                    name="text-box-search-outline"
                    size={size}
                    color={color}
                />}
            />
            <DrawerItem 
                label='Nutritional Agenda'
                onPress={() => props.navigation.navigate('Agenda')}
                icon={(color, size) => <MaterialCommunityIcons
                    name="calendar-month"
                    color={color}
                    size={size}
                />}
            /> 
            <DrawerItem 
                label='FAQ FoodHealth'
                onPress={() => props.navigation.navigate('Search')}
                icon={(color, size) => <AntDesign 
                    name="questioncircleo"
                    size={size}
                    color={color}
                />}
            />
            <DrawerItem 
                label='Exit'
                onPress={() => props.navigation.navigate('Start')}
                icon={(color, size) => <MaterialCommunityIcons
                    name="logout"
                    size={size}
                    color={color}
                />}
            />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}

export default CustomerDrawerContent;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    // header drawer to customize
    drawerContentContainer: {
        flex: 1,
        width: "100%",
        marginTop: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    navIcon: {
        color: '#6B6B6B',
        fontSize: 36,
        marginTop: 2
    },
    // section drawer content item
    drawerBodySection: {
        marginTop: 15,
        // borderBottomWidth: 1,
        // borderBottomColor: 'lightgrey'
    },
    // drawer footer section
    // drawerFooterSection: {
    //     marginTop: 50
    // }

})