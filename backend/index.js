import express from 'express'
import cors from 'cors'
import { upload } from './helpers/upload.js'
import { loadModel, predict } from './helpers/index.js'
import "@tensorflow/tfjs-node"

const corsOptions = {
  origin: '*'
}

const app = express()

app.use(cors(corsOptions))
app.use(express.json())

app.use('/static', express.static('model'))

app.post('/detection', upload.single('image'), async (req, res) => {
  const file = req.file
  const {
    imageWidth,
    imageHeight
  } = req.body

  console.log({
    imageWidth,
    imageHeight
  })

  const predictions = await predict(file, imageWidth, imageHeight);

  console.log({ predictions })

  res.json({ predictions })
})

app.listen(5000, () => {
  console.log(`Server is up and running`)
})