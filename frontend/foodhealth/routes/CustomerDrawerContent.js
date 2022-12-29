import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, {useState, useLayoutEffect} from 'react';
import { View, StyleSheet, Pressable} from 'react-native';
import { Drawer, Text, Switch, TouchableRipple } from 'react-native-paper';
import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons'

const CustomerDrawerContent = (props) => {
    console.log(props)
  // function to take state of the dark mode
  const [isDark, setIsDark] = useState(false)
  const ToggleDarkTheme = () =>{
    if(isDark == false){

        setIconTheme('moon')
        setIsDark(!isDark)
    }else if(isDark == true){
        setIsDark(!isDark);
        setIconTheme('sunny-outline')
    }
  }
//   change icon theme
    const [iconTheme, setIconTheme] = useState('sunny-outline')
// change background color of the drawer
  const [drawerBackground, setDrawerBackground] = useState('white')

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
                icon={({color, size}) => 
                <MaterialCommunityIcons 
                    color={color}
                    size={size} name="home"
/>}
            />
            <DrawerItem 
                label='Annotation'
                onPress={() => props.navigation.navigate('Annotation')}
                icon={({color, size}) => <MaterialCommunityIcons 
                    name="image-edit-outline"
                    color={color} size={size}
                />}
            />
            <DrawerItem 
                label='Recognition'
                onPress={() => props.navigation.navigate('Recognition')}
                icon={({color, size}) => <MaterialCommunityIcons 
                name="line-scan"
                color={color} size={size}

                />}
            />
            <DrawerItem 
                label='Search'
                onPress={() => props.navigation.navigate('Search')}
                icon={({color, size}) => <MaterialCommunityIcons 
                    name="text-box-search-outline"
                    size={size}
                    color={color}
                />}
            />
            <DrawerItem 
                label='Nutritional Agenda'
                onPress={() => props.navigation.navigate('Agenda')}
                icon={({color, size}) => <MaterialCommunityIcons
                    name="calendar-month"
                    color={color}
                    size={size}
                />}
            /> 
            <DrawerItem 
                label='FAQ FoodHealth'
                onPress={() => props.navigation.navigate('Search')}
                icon={({color, size}) => <AntDesign 
                    name="questioncircleo"
                    size={size}
                    color={color}
                />}
            />
            <TouchableRipple
                onPress={() => ToggleDarkTheme()}
            >
                <View style={styles.setting}>
                    <Ionicons name={iconTheme}
                        style={{
                        color: '#6B6B6B',
                        fontWeight: 'bold',
                        marginLeft: -20,
                        marginTop: 15,
                        fontSize: 24
                        }}
                    >
                    </Ionicons>
                    <Text style={{
                            marginTop: 15,
                            color: '#6B6B6B',
                            marginLeft: -7,
                            fontWeight: '200',
                         }}>Dark Theme
                    </Text>
                    
                    <View pointerEvents='none'>
                        <Switch value={isDark}/>
                    </View>
                </View>
            </TouchableRipple>
            <DrawerItem 
                label='Exit'
                onPress={() => props.navigation.navigate('Start')}
                icon={({color, size}) => <MaterialCommunityIcons
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
    // night mode
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }

    // drawer footer section
    // drawerFooterSection: {
    //     marginTop: 50
    // }

})