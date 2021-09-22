const mongoose = require("mongoose")
const schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
        
    }
})

module.exports = mongoose.model('Book', bookSchema)
