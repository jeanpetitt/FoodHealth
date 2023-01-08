import { loadGraphModel } from "@tensorflow/tfjs-converter"
import tfn from '@tensorflow/tfjs-node'
import tf from '@tensorflow/tfjs'
import fs from "node:fs"
import jpeg from "jpeg-js"

/**
 * Load the graph model
 * @returns 
 */
export const loadModel = async () => {
  try {
    const modelUrl = tfn.io.fileSystem("model/model.json")
  
    const model = await loadGraphModel(modelUrl);
  
    return model;
  } catch (err) {
    console.log(JSON.stringify(err))

    return null
  }
}

export const predict = async (file, imageWidth, imageHeight) => {
  console.log('Step 1: Loading model')
  const model = await loadModel();
  console.log("Done")

  console.log('Step 2: Generate a Tensor Image')
  const image = await imageToTensor(file)
  console.log("Done")

  if (model) {
      try {
        if (image) {
          console.log('Step 3: Prediction process')

          const imageExpanded = image.expandDims();

          const predictions = await model.executeAsync(
            imageExpanded
          );
          console.log("Done")

          console.log('Step 4: Extraction predictions')

          const boxes = predictions[6].arraySync();
          const classes = predictions[0].arraySync();
          const scores = predictions[2].arraySync();

          console.log("Results:")

          console.log({
            boxes,
            classes,
            scores
          })

          const labelmap = [
            {
              id: 1,
              name: "biyarni",
            },
            {
              id: 2,
              name: "CousCous legume",
            },
            {
              id: 3,
              name: "ananas",
            },
          ];

          const threshold = 0.4;

          const detections = extractPredictions(
            scores,
            boxes,
            classes,
            threshold,
            labelmap,
            imageWidth,
            imageHeight
          );

          // Dispose tensors
          image.dispose();
          imageExpanded.dispose();

          for (let predict of predictions) {
            predict.dispose();
          }

          return detections
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Model not loaded");
    }

    return []
}

const extractPredictions = (
  scores,
  boxes,
  classes,
  threshold,
  labelmap,
  width,
  height
) => {
  const detectionObjects = [];
  let maxScore = 0;

  for (let i = 0; i < 99; i++) {
    const score = scores[0][i];

    if (score >= threshold) {
      const bbox = [];
      const minY = boxes[0][i][0] * height;
      const minX = boxes[0][i][1] * width;
      const maxY = boxes[0][i][2] * height;
      const maxX = boxes[0][i][3] * width;

      bbox[0] = minX;
      bbox[1] = minY;
      bbox[2] = maxX - minX;
      bbox[3] = maxY - minY;

      detectionObjects.push({
        class: classes[0][i],
        label: labelmap[classes[0][i] - 1].name,
        score: score.toFixed(4),
        bbox: bbox,
      });
    }

    if (score > maxScore) maxScore = score
  }

  console.log({ maxScore });

  return detectionObjects;
};

/**
 * Load image from filesystem
 */
const loadImage = async (file) => {
  const imageUri = file.path

  return new Promise((resolve, reject) => {
    fs.readFile(imageUri, (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
      }

      resolve(data)
    })
  })
}

/**
 * Convert the image file into Buffer
 */
export const imageToTensor = async (file) => {
  const imageUrl = file.path

  const rawImageData = await loadImage(file)

  const TO_UINT8ARRAY = true;
  const { width, height, data } = jpeg.decode(rawImageData, {
    useTArray: TO_UINT8ARRAY,
  });

  // Drop the alpha channel info
  const buffer = new Uint8Array(width * height * 3);
  let offset = 0; // offset into original data
  for (let i = 0; i < buffer.length; i += 3) {
    buffer[i] = data[offset];
    buffer[i + 1] = data[offset + 1];
    buffer[i + 2] = data[offset + 2];

    offset += 4;
  }

  return tf.tensor3d(buffer, [height, width, 3]);
}