const mongoose = require("mongoose")
const schema = mongoose.Schema

const inventory = new mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})


