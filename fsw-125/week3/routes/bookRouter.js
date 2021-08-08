const express = require('express')
const bookRouter = express.Router();
const { v4: uuidv4 } = require('uuid')

//Fake Data

let books = [
  { title: 'Devil And The White City1', author: 'Erik Larson1', _id: uuidv4() },
  { title: 'Devil And The White City2', author: 'Erik Larson2', _id: uuidv4() },
  { title: 'Devil And The White City3', author: 'Erik Larson3', _id: uuidv4() },
  { title: 'Devil And The White City4', author: 'Erik Larson4', _id: uuidv4() },
]

bookRouter
.get('/', (req, res) => {
  res.send(books)
})


.post('/', (req, res) => {
  const newBook = req.body;
  newBook._id = uuidv4();
  books.push(newBook)
  console.log(books)
  res.send(`Successfully added ${newBook.title} to the database`)
})

module.exports = bookRouter;