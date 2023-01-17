
import React, {useState, useEffect, useRef} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {Camera, CameraType} from 'expo-camera'
import IconButton from '../components/IconButton'
import ImageViewer from '../components/ImageViewer'
import { useNavigation } from '@react-navigation/native'


const tag = '[CAMERA]'

export default function CameraView() {
    const navigation = useNavigation()

    const [hasPermission, setHasPermission] = useState<any>(null)
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState<any>(null)
    const [startOver, setStartOver] = useState(false)
    const [type, setType] = useState(CameraType.back)

    let camera = useRef<Camera>(null);

    useEffect(() => {
        ;(async () => {
            const {status} = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }, [])
    const __closeCamera = () => {
        navigation.navigate('Home')
    }
    const __takePicture = async () => {
        if (camera.current) {
            const photo = await camera.current.takePictureAsync({ base64: true })
            // console.log(photo)
            setPreviewVisible(true)
            setCapturedImage(photo)
        }

    }
    const __savePhoto = async () => {}


    return (
        <View style={styles.container}>
            {startOver ?
                // Screen with button to take picture
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#E6E1EF',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity
                        onPress={() => setStartOver(true)}
                        style={{
                        width: 130,
                        borderRadius: 4,
                        backgroundColor: '#5B005C',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40
                        }}
                    >
                        <Text
                        style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}
                        >
                            Start recognition
                        </Text>
                    </TouchableOpacity>
                </View>
                :
                <View
                    style={{
                        flex: 1
                    }}
                >
                    {previewVisible ?
                        // Screen after capture picture. recognition will be done here
                        <ImageViewer 
                            capturedImage={capturedImage}
                            onChangePreviewVisible={setPreviewVisible}
                        />
                        :
                        // Camera screen
                        <Camera
                            style={{flex: 1}}
                            type={type}
                            ref={camera}
                            ratio='16:9'
                        >
                            <View
                                style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row-reverse'
                                }}
                            >
                                <View
                                    style={{
                                        position: 'absolute',
                                        top: '7%',
                                        right: '5%',
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}
                                >
                                    <IconButton icon='arrow-left' onPress={__closeCamera} />
                                    <Text style={{ marginLeft: 15, marginTop: 8, fontWeight: 'bold', color: '#fff' }}>Go back</Text>
                                </View>
                                <View
                                    style={{
                                        position: 'absolute',
                                        top: '7%',
                                        left: '5%'
                                    }}
                                >
                                    <IconButton icon='rotate-left' onPress={
                                        () => {
                                            setType(type === CameraType.back ? CameraType.front : CameraType.back)
                                        }
                                    } />
                                </View>
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        flexDirection: 'row',
                                        flex: 1,
                                        width: '100%',
                                        padding: 20,
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <View
                                        style={{
                                        alignSelf: 'center',
                                        flex: 1,
                                        alignItems: 'center'
                                        }}
                                    >
                                        <TouchableOpacity
                                            onPress={__takePicture}
                                            style={{
                                                width: 70,
                                                height: 70,
                                                bottom: 0,
                                                borderRadius: 50,
                                                borderWidth: 4,
                                                borderColor: '#fff',
                                                backgroundColor: '#FAB224'
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </Camera>
                    }
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})















{/* 

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Camera } from 'expo-camera';
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from '@tensorflow-models/mobilenet';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';

const textureDims = Platform.OS === 'ios' ?
  {
    height: 1920,
    width: 1080,
  } :
   {
    height: 1200,
    width: 1600,
  };

let frame = 0;
const computeRecognitionEveryNFrames = 60;

const TensorCamera = cameraWithTensors(Camera);

const initialiseTensorflow = async () => {
  await tf.ready();
  tf.getBackend();
}

export default function CameraView() {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [detections, setDetections] = useState<string[]>([]);
  const [net, setNet] = useState<mobilenet.MobileNet>();


  const handleCameraStream = (images: IterableIterator<tf.Tensor3D>) => {
    const loop = async () => {
      if(net) {
        if(frame % computeRecognitionEveryNFrames === 0){
          const nextImageTensor = images.next().value;
          if(nextImageTensor){
            const objects = await net.classify(nextImageTensor);
            if(objects && objects.length > 0){
              setDetections(objects.map(object => object.className));
            }
            tf.dispose([nextImageTensor]);
          }
        }
        frame += 1;
        frame = frame % computeRecognitionEveryNFrames;
      }

      requestAnimationFrame(loop);
    }
    loop();
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      await initialiseTensorflow();
      setNet(await mobilenet.load({version: 1, alpha: 0.25}));
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if(!net){
    return <Text>Model not loaded</Text>;
  }

  return (
    <View style={styles.container}>
      <TensorCamera 
        style={styles.camera} 
        onReady={handleCameraStream}
        type={Camera.Constants.Type.back}
        cameraTextureHeight={textureDims.height}
        cameraTextureWidth={textureDims.width}
        resizeHeight={200}
        resizeWidth={152}
        resizeDepth={3}
        autorender={true}
      />
      <View style={styles.text}>
      {detections.map((detection, index) => 
          <Text key={index}>{detection}</Text>
      )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
  },
  camera: {
    flex: 10,
    width: '100%',
  },
});




*/}
