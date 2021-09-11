const express = require('express')
const app = express();
const morgan = require('morgan')
const { v4: uuidv4 } = require('uuid')
const thingsFinder =require('./things')
const PORT = 9000;


//Application Level Middleware
app.use(express.json())
app.use(morgan('dev'));

//routes
app.use('/inventoryItems', thingsFinder)


//server start logic

app.listen(PORT, () => {
  console.log(`App has started listening on port: ${PORT}`);
})