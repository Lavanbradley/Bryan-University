const express = require('express')
const app = express();
const { v4: uuidv4 } = require('uuid')
const killsRouter = require('./kills')


const PORT = 3000;

app.use(express.json())

app.use('/kills', killsRouter)

app.listen(PORT, () => {
  console.log(`App started listening on port: ${PORT}`)
})