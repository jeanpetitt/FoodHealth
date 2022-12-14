import { StyleSheet, Pressable, Text, View, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';


export default function Start({navigation}) {

  const handlePress = () =>{
    navigation.navigate('Home')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => null
    })
  })


  return (
    <View style={styles.container}>
      {/* image welcome page */}
      <View style={styles.containerimageWelcome}>
        <Image source={require('../assets/image/imgWelcome.jpeg')} style={styles.imageWelcome}>
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
          borderRadius: 50,
          height: '100%',
          width: '100%',
          position: 'absolute',
          shadowRadius: 10

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
    position: 'relative',
    width: '80%',
    height: '50%',
    // left: '11%',
    top: '8%',
    // backgroundColor: 'orange',
    marginHorizontal: '10%',
    alignItems: 'center'
  },
  imageWelcome: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 250,
    shadowRadius: 50,
    aspectRatio: 1 * 1.4,
    resizeMode: 'cover',
  },
  textWelcome: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    color: '#FFFFFF',
    top: 96,
    // padding:'20px 20px 20px 40px',
    position: 'absolute',

  },

// button go to home page
  btn: {
    position: 'absolute',
    top: '70%',
    height: 55,
    width: '39%',
    left: '30%',
    alignItems: 'center'
  },
  textStart: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'green',
    top: 13
  },
  


})
