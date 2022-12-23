import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useLayoutEffect, useState } from 'react';

const Home = ({navigation}) =>{

  // function to show dropMenu
  const [showModal, setShowModal] = useState(false)

  const iconMenuPress = () =>{
    setShowModal(true)
    
  }

  // customize header in home screen
  useLayoutEffect(() =>{
    navigation.setOptions({
      headerTitle: 'Home',
      headerLeft:() =>{
        
      },
      headerRight: () =>(
        <Pressable onPress={iconMenuPress}>
          <Ionicons name='ios-ellipsis-vertical' color='#212021' size='1.5rem'></Ionicons>
        </Pressable>
      ) 
    })
  })

  const [color, setColor] = useState()

  // function that allow to navigate on Annotation Screen
  const handlePressEdit = () => {
    navigation.navigate('Annotation')
  }
  // function that allow to navigate on Recognition Screen
  const handlePressRecognition = () => {
    navigation.navigate('Recognition')
  }
  // function that allow to navigate on search Screen
  const handlePressSearch = () => {
    navigation.navigate('Search')
  }
    // function that allow to stay on Home Screen
  const handlePressHome = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
    {/* modal */}
      <Modal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
      <Text> i am the</Text>
    </Modal>
    {/* endmodal */}
    {/* bottom tab navbar */}
      <View style={styles.navBarBottom}>
      {/* pressable icon */}
        <Pressable onPress={handlePressHome} >
          <MaterialCommunityIcons  name='home-outline' style={styles.navIcon} color="blue"/>
          <Text style={{fontSize: '0.5rem', position: 'relative', color: '#6B6B6B'}}>Home</Text>
        </Pressable>

        <Pressable 
          onPress={handlePressEdit} 
        >
          <MaterialCommunityIcons name='image-edit-outline' style={styles.navIcon}/>
          <Text style={{fontSize: '0.5rem', position: 'relative', color: '#6B6B6B'}}>Annotation</Text>
        </Pressable>

        <Pressable onPress={handlePressRecognition} >
          <MaterialCommunityIcons name='line-scan' style={styles.navIcon}/>
          <Text style={{fontSize: '0.5rem', position: 'relative', color: '#6B6B6B'}}>Recognition</Text>
        </Pressable>

        <Pressable  onPress={handlePressSearch}>
          <MaterialCommunityIcons name='text-box-search-outline' style={styles.navIcon}/>
          <Text style={{fontSize: '0.5rem', position: 'relative', color: '#6B6B6B'}}>Search</Text>
        </Pressable>
      {/* end pressable  */}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F7FA',
    borderRadius: 50
  },
  // footer navbar
  navBarBottom: {
    position: 'absolute',
    height: '10%',
    width: '100%',
    top: '90%',
    backgroundColor: '#D9D9D9',
    justifyContent: 'space-around',
    flexDirection: 'row',

  },
  // footer navbar icon
  navIcon: {
    color: '#6B6B6B',
    fontSize: '1.5rem',
    marginTop: 8,
  }
});
export default Home;