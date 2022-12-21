import { StyleSheet, Text, View, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function Home({navigation}) {

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
    {/* footer navbar */}
      <View style={styles.navBarBottom}>
      {/* pressable icon */}
        <Pressable onPress={handlePressHome}>
          <MaterialCommunityIcons name='home-outline' color="blue" style={styles.navIcon}/>
        </Pressable>

        <Pressable onPress={handlePressEdit}>
          <MaterialCommunityIcons name='image-edit-outline' style={styles.navIcon}/>
        </Pressable>

        <Pressable onPress={handlePressRecognition}>
          <MaterialCommunityIcons name='line-scan' style={styles.navIcon}/>
        </Pressable>

        <Pressable  onPress={handlePressSearch}>
          <MaterialCommunityIcons name='text-box-search-outline' style={styles.navIcon}/>
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
    color: 'black',
    fontSize: '1.5rem',
    marginTop: 15
  }
});