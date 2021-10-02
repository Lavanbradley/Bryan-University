

const express = require('express')
const bookRouter = express.Router();
const Book = require('../models/book.js')

 
//Routes

//Get all
bookRouter
  .get('/', (req, res, next) => {
    Book.find((err, books) =>{
     if(err){
       res.status(500)
       return next(err)
     }
     return res.status(200).send(books)
    })


  })

  .get('/:bookId', (req, res, next) => {
    const bookId = req.params.bookId;
    const singularBook = books.find(book => book._id === bookId)
    
    if(!singularBook){
      const error =  new Error('This item was not found')
     return next(error)
    }

    res.status(200).send(singularBook)
  })//GET one


  .get('/search/genre', (req, res, next) => {  //localhost:9000/books/search/genre?genre=Philosophy
    Book.find({genre: req.query.genre}, (err, books)=>{
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(books)
    })
  })//GET some

  bookRouter.post('/', (req, res, next) => {
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) =>{
     if(err){
       res.status(500)
       return next(err)
     }
     return res.status(201).send(savedBook)
    })
  })//Post one

  .delete('/:bookId', (req, res, next) => {
    Book.findOneAndDelete({_id: req.params.bookId},(err, deletedItem)=>{
     if(err){
       res.status(500)
       return next(err)
     }
     return res.status(200).send(`Successfully deleted item ${deletedItem.title}`)
    })
  })//DELETE one

  .put('/:bookId', (req, res, next) => {
    Book.findOneAndUpdate(
      {_id: req.params.bookId},
      req.body,
      {new: true},
      (err, updatedBook) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedBook)
      }
    )
  })//PUT one 

module.exports = bookRouter;