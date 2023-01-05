import React, {useLayoutEffect} from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome'

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
    <ImageBackground source={require('../assets/fruit2.jpeg')} resizeMode='cover' style={styles.container}>
            
            <View style={styles.topCard}>
                <View style={styles.info_place}>
                    <View style={styles.textFlex}>
                        <Icon 
                            name='map-marker' 
                            color="#F58500" 
                            style={{ fontSize: 30 }}
                        ></Icon>
                        <Text style={{ fontWeight: 'bold', color: "#5B005C", marginTop: 12, marginLeft: 5 }}>Cameroon</Text>
                    </View>
                    <View>
                        <Icon
                            name='info'
                            color='#fff'
                            style={{ fontSize: 20, backgroundColor: '#5B005C', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 50 }}
                            onPress={() => alert('about developer popup !')}
                        ></Icon>
                    </View>
                </View>
                <View>
                    <Text style={styles.helloText}>Hello food lovers,</Text>
                    <Text style={{ fontSize: 16 }}>welcome to this FoodHealth app</Text>
                </View>
            </View>

        </ImageBackground>
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
    flex: 1,
    paddingTop: 30,
    justifyContent: 'space-between'
  },
  topCard: {
        top: '30%',
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        paddingVertical: 20,
        margin: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, .7)'
    },
    info_place: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    helloText: {
        fontSize: 30,
        color: '#FAB224',
        textAlign: 'left',
        marginTop: 35,
        marginBottom: 7,
        fontWeight: 'bold'
    },
    textFlex: {
        display: 'flex',
        flexDirection: 'row'
    },
    textBold: {
        color: '#5B005C',
        fontWeight: 'bold',
        fontSize: 17
    }
})