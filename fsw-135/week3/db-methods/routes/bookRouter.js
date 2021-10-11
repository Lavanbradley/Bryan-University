const express = require('express')
const bookRouter = express.Router()
const Book = require('../models/book.js')

// Get All
bookRouter.get('/', (req, res, next) => {
  Book.find((err, books) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(books)
  })
})

//Get By Authors
bookRouter.get('/:authorId', (req, res, next) => {
  Book.find({author: req.params.authorId},(err, books) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(books)
  })
})

//Search by title
bookRouter
.get('/search/title', (req, res, next) => {  //http://localhost:9000/books/search/title?title=Harry Potter and the Philosopher's Stone
  Book.find({title: req.query.title}, (err, books)=>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(books)
  })
})
//Like a book


   .put('/like/:bookId', (req, res, next) => {  //PUT localhost:9000/books/like/615bce2c19212cf535704f28
    Book.findOneAndUpdate(
      {_id: req.params.bookId},
      { $inc: { likes: 1 } },
      {new: true},
      (err, updatedBook) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedBook)
      }
    )
  })
// Add new book
bookRouter.post('/', (req, res, next) => {
  const newBook = new Book(req.body)
  newBook.save((err, savedBook) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedBook)
  })
})

//Find book by like range

bookRouter.get('/search/byLikes/:btm/:top', (req,res,next)=>{
  Book.where('likes').gte(req.params.btm).lte(req.params.top).exec((err,book)=>{ //http://localhost:9000/books/search/bylikes/5/10
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(book)
  })
})




//DELETE one
.delete('/:bookId', (req, res, next) => {
  Book.findOneAndDelete({_id: req.params.bookId},(err, deletedItem)=>{
   if(err){
     res.status(500)
     return next(err)
   }
   return res.status(200).send(`Successfully deleted item ${deletedItem.title}`)
  })
})

module.exports = bookRouter