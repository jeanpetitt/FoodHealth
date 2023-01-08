import React, { useEffect, useState } from "react";
import IconButton from "./IconButton";
import { CameraCapturedPicture } from "expo-camera";
import { ImageBackground, View, Text, InteractionManager, useWindowDimensions } from "react-native";
import Loader from "./Loader";
import axios from "axios";
import BboxView, { BoxType } from "./BboxView";

const instance = axios.create({
  baseURL: "http://192.168.43.6:5000",
  timeout: 1000000000
})

type ImageViewerPropsType = {
  capturedImage: CameraCapturedPicture;
  onChangePreviewVisible: (value: boolean) => void;
};

type Prediction = {
  class: number,
  score: string,
  label: string,
  bbox: number[]
}

const ImageViewer = ({
  capturedImage,
  onChangePreviewVisible,
}: ImageViewerPropsType) => {
  // Set local state
  const [predicting, setPredicting] = useState(false);
  const [predictions, setPredictions] = useState<Prediction[]>([]);

  // Get windows dimensions
  const { width, height } = useWindowDimensions()

  // UseEffect section
  useEffect(() => {
    if (!predicting) {
      const interactionPromise = InteractionManager.runAfterInteractions(() => predict());
      return () => interactionPromise.cancel();
    }
  }, [capturedImage]);

  // Some handlers

  // Get mimetype value of an image
  const getMimeType = (extension: string) => {
    switch (extension) {
      case "jpg":
        return "image/jpeg";
      case "jpeg":
        return "image/jpeg";
      case "png":
        return "image/png";
      case "webp":
        return "image/webp";
      default:
        return "image/jpeg";
    }
  };


  // Predict
  const predict = async () => {
    if (capturedImage && capturedImage.uri) {
      setPredicting(true);
  
      // Get the file extension
      const extension = capturedImage.uri.split(".").pop();
  
      if (extension) {
        // Get the mimetype value. eg: image/jpeg
        const mimetype = getMimeType(extension);
  
        // Preparing file to be uploaded
        const fileToUpload = {
          uri: capturedImage.uri,
          name: `${capturedImage.uri.split("/").pop()}`,
          type: mimetype,
        } as any;
  
        const formData = new FormData()
    
        formData.append('image', fileToUpload);
        formData.append("imageWidth", width.toString())
        formData.append("imageHeight", height.toString())
  
        try {
          // Send request for prediction
          const response = await instance.post(
            "/detection", 
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          );

          console.log({ response: response.data })
    
          // Get prediction data
          const predictions = response.data.predictions as Prediction[]
          
          setPredictions(predictions)
          setPredicting(false)
        } catch (err: any) {
          console.log(JSON.stringify(err))
        }
      }
    }
  };

  const formatBboxes = (boxes: Prediction[]): BoxType[] => {
    const bboxes: BoxType[] = []

    console.log({boxes})

    for (let box of boxes) {
      const [xmin, ymin, width, height] = box.bbox

      const bbox = {
        name: box.label,
        score: +(Number(box.score) * 100).toFixed(2),
        width,
        height,
        ymin,
        xmin
      } as BoxType

      bboxes.push(bbox)
    }

    return bboxes
  }


  return (
    <ImageBackground
      source={{ uri: capturedImage && capturedImage.uri }}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          paddingTop: 45,
          paddingHorizontal: 10,
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <IconButton
              icon="camera"
              onPress={() => onChangePreviewVisible(false)}
            />
            <Text
              style={{
                marginLeft: 15,
                marginTop: 8,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Go back
            </Text>
          </View>
          {/* <IconButton icon='save' onPress={__savePhoto} /> */}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          paddingBottom: 45,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {/* <Text
          style={{
            color: "#fff",
            fontSize: 20,
            padding: 15,
            paddingHorizontal: 30,
            borderRadius: 4,
            fontWeight: "300",
            backgroundColor: "#5B005C",
          }}
        >
          Plat:{" "}
          <Text style={{ fontWeight: "600" }}>Ceci n'est pas un plat !</Text>
        </Text> */}
      </View>

      {
        formatBboxes(predictions).map((box, index) => {
          return <BboxView 
            key={index}
            box={box}
          />
        })
      }

      <Loader show={predicting} />
    </ImageBackground>
  );
};

export default ImageViewer;