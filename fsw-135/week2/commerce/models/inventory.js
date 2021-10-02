const mongoose = require("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new Schema({
  category: {
    type: String,
    required: true,
    enum: ['Technology', 'Toys', 'Clothing', 'Automobile', 'Groceries', 'Books', 'Phones']
  },
  item: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Inventory', inventorySchema )
