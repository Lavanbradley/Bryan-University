const express = require('express')
const app = express();
const { v4: uuidv4 } = require('uuid')
const todoRouter = require('./todo')


const PORT = 3000;

app.use(express.json())

app.use('/todos', todoRouter)

app.listen(PORT,() => {
  console.log(`App started listening on port: ${PORT}`);
})