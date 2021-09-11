const express = require('express')
const bookRouter = express.Router();
const { v4: uuidv4 } = require('uuid')

//Fake Data

let books = [
  { title: 'Devil And The White City1 testing', author: 'Erik Larson1', genre: 'science fiction', _id: uuidv4() },
  { title: 'Devil And The White City2', author: 'Erik Larson2', genre: 'science fiction', _id: uuidv4() },
  { title: 'Devil And The White City3', author: 'Erik Larson3', genre: 'science fiction', _id: uuidv4() },
  { title: 'Devil And The White City4', author: 'Erik Larson4', genre: 'Philosophy', _id: uuidv4() },
]
//Routes
bookRouter
  .get('/', (req, res, next) => {
    res.status(200).send(books)


  })//Get all

  .get('/:bookId', (req, res, next) => {
    const bookId = req.params.bookId;
    const singularBook = books.find(book => book._id === bookId)
    
    if(!singularBook){
      const error =  new Error('This item was not found')
     return next(error)
    }

    res.status(200).send(singularBook)
  })//GET one


  .get('/search/genre', (req, res) => {  //localhost:9000/books/search/genre?genre=Philosophy
    const bookGenre = req.query.genre;
    const filteredBooks = books.filter(book => book.genre === bookGenre)
    res.status(200).send(filteredBooks)
  })//GET some

  .post('/', (req, res) => {
    const newBook = req.body;
    newBook._id = uuidv4();
    books.push(newBook)
    console.log(books)
    res.status(201).send(newBook)
  })//Post one

  .delete('/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    const bookIndex = books.findIndex(book => book._id === bookId);

    books.splice(bookIndex, 1)
    res.send('Resource successfully deleted!')
  })//DELETE one

  .put('/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    const bookIndex = books.findIndex(book => book._id === bookId);
    const updatedBookResource = Object.assign(books[bookIndex], req.body)

    res.status(201).send(`Resource successfully updated to ${updatedBookResource}`)
  })//PUT one 

module.exports = bookRouter;