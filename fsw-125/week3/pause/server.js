// Server.js

const { json } = require('express');
const express = require('express')
const app = express();
const PORT = 3000;

//Application Level Middleware
app.use(express.json())
//Fake Data

let books = [
  { title: 'Devil And The White City1', author: 'Erik Larson1' },
  { title: 'Devil And The White City2', author: 'Erik Larson2' },
  { title: 'Devil And The White City3', author: 'Erik Larson3' },
  { title: 'Devil And The White City4', author: 'Erik Larson4' },
]

app.post('/books', (req,res)=>{
  const newBook = req.body;
  books.push(newBook)
  console.log(books)
  res.send(`Successfully added ${newBook.title} to the database`)
})

//GET all route

app.get('/books', (req, res) => {
  res.send(books)
})

// server start logic

app.listen(PORT, () => {
  console.log(`App started listening on port: ${PORT}`)
})