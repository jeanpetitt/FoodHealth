import React,{useLayoutEffect} from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from '../components/Button';

const Recognition = ({navigation}) => {

  // customize header home screen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: ({color})=> (
      <MaterialCommunityIcons 
        name='keyboard-backspace'
        color={color}
        style={styles.headerHome}
        onPress={handlePressHome}
      />
        
      )
    })
  });

   const handlePressHome = () => {
    navigation.goBack();
  }

  return (
     <ImageBackground source={require('../assets/fruit2.jpeg')} resizeMode='cover' style={styles.container}>
            
            {/* <View style={styles.topCard}>
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
                    <Text style={{ fontSize: 16 }}>welcome to this food recognition app</Text>
                </View>
            </View> */}

            <View style={{ margin: 10, marginTop: 200 }}>
                <Button 
                    icon='camera' 
                    title='Open camera' 
                    color='orange'
                    subText='Real time food components detection' 
                    onPress={ () => navigation.navigate(
                             'camera',)
                    }
                />
                <Button 
                    icon='image' 
                    title='Pick from gallery' 
                    color='white'
                    subText='Detect multiple food components' 
                    onPress={ () => navigation.navigate("Home")
                    }
                />
            </View>

        </ImageBackground>
  );
}

export default Recognition;

const styles = StyleSheet.create({
  headerHome:{
    fontSize: 30,
    marginLeft: 20,
    marginRight: 40
  },
  container: {
    flex: 1,
    paddingTop: 30,
  }
})
