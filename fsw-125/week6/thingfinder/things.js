const express = require('express')
const thingsFinder = express.Router();
const { v4: uuidv4 } = require('uuid')




const inventoryItems = [
  {
    name: "banana",
    type: "food",
    price: 200,
    _id: uuidv4()
  },
  {
    name: "pants",
    type: "clothing",
    price: 2500,
    _id: uuidv4()
  },
  {
    name: "basketball",
    type: "toy",
    price: 1000,
    _id: uuidv4()
  },
  {
    name: "rockem sockem robots",
    type: "toy",
    price: 1500,
    _id: uuidv4()
  },
  {
    name: "shirt",
    type: "clothing",
    price: 800,
    _id: uuidv4()
  },
  {
    name: "soup",
    type: "food",
    price: 300,
    _id: uuidv4()
  },
  {
    name: "flour",
    type: "food",
    price: 100,
    _id: uuidv4()
  }
]

//routes

thingsFinder
  .get('/', (req, res, next) => {
     
     res.send(inventoryItems)
  })//Get all




  .get('/search/type',(req,res)=>{
    const foodItems = req.query.type;
    const filteredItems = inventoryItems.filter(item => item.type === foodItems)
    res.send(filteredItems)
  })

  .get('/search/name', (req,res) =>{
    const foodNames = req.query.name;
    const filteredNames = inventoryItems.filter(item => item.name === foodNames)
    res.send(filteredNames)
  })

module.exports = thingsFinder;
