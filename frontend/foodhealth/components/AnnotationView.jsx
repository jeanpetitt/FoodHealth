import { Col, Row, Grid } from 'react-native-easy-grid';
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native';

export default DisplayImages = ({pics, deleteImage}) => {  //<<==component to display images passed in from 'pics'

const translateX = new Animated.Value(0)  //<<==draggable related code
const translateY = new Animated.Value(0)
const handleGesture = Animated.event([{nativeEvent: {translationX: translateX,translationY:translateY}}], { useNativeDriver: true });

//VV== code below displays single image grid
const displayImg = (img_source, width, ht, index, modalWidth, modalHt) => {  
    let aniStyle = {
                transform:[
                    { translateY : translateY },
                    { translateX :   translateX }
                ]
            };
            return (
                <view>
                    <PanGestureHandler onGestureEvent={handleGesture}>
                        <Animated.View style={aniStyle}>
                        <TouchableOpacity onPress={()=>{setModalDialog(index)}} >
                            <FastImage 
                                source={{uri:img_source}} 
                                resizeMode={FastImage.resizeMode.cover} 
                                key={index}
                                style={{
                                    width:width, 
                                    height:ht, 
                                    verticalAlign:0,
                                    paddingTop:0,
                                }}
                            />
                        </TouchableOpacity>
                        </Animated.View>
                    </PanGestureHandler>
                </view>   
            )
    }
//VV==code blow to display 2 images as an example

 return (                   
            <Grid style={{position:"absolute", paddingTop:0,paddingLeft:0}}>
                <Row style={styles.row}>   
                    {pics.map((item, index) => {
                        return (displayImg(item, screen_width*half, screen_width*half, index,  screen_width, item.height*(screen_width/item.width)))
                    })}                 
                </Row>
            </Grid>
        );
 }