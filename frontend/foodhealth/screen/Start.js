import { StyleSheet, Pressable, Text, View, Image } from 'react-native';


export default function Start({navigation}) {

  const handlePress = () =>{
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      {/* image welcome page */}
      <View style={styles.containerimageWelcome}>
      <Image source={require('../assets/image/imgWelcome.jpeg')} resizeMode="cover" style={styles.imageWelcome}>
      </Image>
      <Text style={styles.textWelcome}>
        Enjoy your Food
      </Text>

      </View>

      {/* button started */}
      <View style={styles.btn}>
        <Pressable
        style={({ pressed }) => ({ 
          backgroundColor: pressed? 'orange':'#D9D9D9',
          borderRadius: '50px',
          height: '100%',
          width: '100%',
          position: 'absolute'

         })}
        onPress={handlePress}
        >
        <Text style={styles.textStart}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'linear-gradient(191.65deg, rgba(15, 86, 224, 0.46) 4.54%, #A0BCF3 99.15%)'
  },
// image welcome
  containerimageWelcome: {
    position: 'absolute',
    width: '80%',
    height: '50%',
    left: '11%',
    top: '8%',
    // backgroundColor: 'orange'

  },
  imageWelcome: {
    height: '100%',
    width: '100%',
    transform: 'matrix(1, -0.01, 0.01, 1, 0, 0)',
    borderRadius: 150
  },
  textWelcome: {
    position: 'absolute',
    fontFamily: 'poppins',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '2em',
    textAlign: 'center',
    color: '#FFFFFF',
    textShadowRadius: 90,
    top: 96
  },

// button go to home page
  btn: {
    position: 'absolute',
    justifyContent: 'center',
    top: '70%',
    height: 50,
    width: '35%',
    left: '30%'
  },
  textStart: {
    fontFamily: 'poppins',
    padding: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '0.8em',
    textAlign: 'center'
  }

});
