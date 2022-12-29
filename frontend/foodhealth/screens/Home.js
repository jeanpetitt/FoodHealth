import React, {useLayoutEffect} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'

const Home = ({navigation}) => {



  // customize header home screen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTile: 'Accueil',
      headerLeft: ({color})=> (
      <MaterialCommunityIcons 
        name='menu'
        color={color}
        style={styles.headerHome}
        onPress={handlePressHome}
      />
        
      )
    })
  });

   const handlePressHome = () => {
    navigation.openDrawer();
  }

  return (
    <View>
      <Text>Home Start</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  headerHome:{
    fontSize: 24,
    marginLeft: 20,
    marginRight: 50
  },
  container: {

  }
})