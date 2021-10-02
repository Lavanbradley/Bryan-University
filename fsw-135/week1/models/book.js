const mongoose = require("mongoose")
const Schema = mongoose.Schema
const maxYear = new Date().getFullYear();
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ['Fiction', 'Non-Fiction', 'Romance', 'Comedy', 'Adventure'],
        required: true
        
    },
    author: {
        type: String,
        required: true
        
    },
    release_year: {
        type: Number,
        required: true,
        min:1874,
        max: maxYear
    }
})

module.exports = mongoose.model('Book', bookSchema)
