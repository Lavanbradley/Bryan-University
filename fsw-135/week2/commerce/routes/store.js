const express = require('express');
const inventory = require('../models/inventory.js');
const inventoryRouter = express.Router();
const Inventory = require('../models/inventory.js')


inventoryRouter.get('/', (req, res, next) =>{
  Inventory.find((err, items) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(items)
  })
})


inventoryRouter.get('/search/category', (req,res,next)=>{
  Inventory.findOne({category: req.query.category}, (err, inventory)=>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(inventory)
  })
})

inventoryRouter.post('/', (req,res,next) => {
  const newItem = new Inventory(req.body)
  newItem.save((err, savedItem) =>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedItem)
  })
})


inventoryRouter.delete("/:inventoryId", (req,res,next)=>{
  Inventory.findOneAndDelete({_id: req.params.inventoryId}, (err, deletedItem)=>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted item ${deletedItem.item}`)
  })
})


inventoryRouter.put('/:inventoryId', (req,res,next)=>{
  Inventory.findOneAndUpdate(
    {_id: req.params.inventoryId},
    req.body,
    {new: true},
    (err, updatedInventory)=>{
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedInventory)
    }
  )
})
module.exports = inventoryRouter;