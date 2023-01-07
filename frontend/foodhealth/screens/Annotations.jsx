import React,{useLayoutEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import Button from '../components/Button';
import DisplayImages from '../components/AnnotationView'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import FastImage from 'react-native-fast-image';


const Annotations = ({navigation,pics, deleteImage}) => {

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



  
  const [image, setImage] = useState(null);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 9],
      quality: 1,
    });

    console.log(result);
    
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const cameraImage = async () => {
  // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 9],
      quality: 1,
    });

    console.log(result);
    
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }
  return (
   <View style={styles.container}>
      <View style={styles.imageContainer}>
        {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
      </View>
      <View style={styles.btn}>

        <Button title="Pick an image to annotate" color="orange" onPress={pickImage} />
      </View>
      <View style={styles.btn}>
        <Button title="Use camera to take image" color="blue" onPress={cameraImage} />
      </View>
    </View>
  );
}
// const translateX = new Animated.Value(0)  //<<==draggable related code
// const translateY = new Animated.Value(0)
// const handleGesture = Animated.event([{nativeEvent: {translationX: translateX,translationY:translateY}}], { useNativeDriver: true });

// //VV== code below displays single image grid
// const displayImg = (img_source, width, ht, index, modalWidth, modalHt) => {  
//     let aniStyle = {
//                 transform:[
//                     { translateY : translateY },
//                     { translateX :   translateX }
//                 ]
//             };
//             return (
//                 <view>
//                     <PanGestureHandler onGestureEvent={handleGesture}>
//                         <Animated.View style={aniStyle}>
//                         <TouchableOpacity onPress={()=>{setModalDialog(index)}} >
//                             <FastImage 
//                                 source={{uri:img_source}} 
//                                 resizeMode={FastImage.resizeMode.cover} 
//                                 key={index}
//                                 style={{
//                                     width:width, 
//                                     height:ht, 
//                                     verticalAlign:0,
//                                     paddingTop:0,
//                                 }}
//                             />
//                         </TouchableOpacity>
//                         </Animated.View>
//                     </PanGestureHandler>
//                 </view>   
//             )
//     }
// //VV==code blow to display 2 images as an example

//  return ( 
//           <View>

//             <Grid style={{position:"absolute", paddingTop:0,paddingLeft:0}}>
//                 <Row style={styles.row}>   
//                     {pics.map((item, index) => {
//                         return (displayImg(item, screen_width*half, screen_width*half, index,  screen_width, item.height*(screen_width/item.width)))
//                     })}                 
//                 </Row>
//             </Grid>
//           </View>                  
//         );
//  }

export default Annotations;

const styles = StyleSheet.create({
  headerHome:{
    fontSize: 30,
    marginLeft: 20,
    marginRight: 40
  },
  container: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: "skyblue"
  },
  imageContainer:{
    marginTop: 30
  },
  image:{
    width: 300,
    height: 300,
  }, 
  btn: {
    marginTop: "5%",
    marginBottom: 10
  }
})