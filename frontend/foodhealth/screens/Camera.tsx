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