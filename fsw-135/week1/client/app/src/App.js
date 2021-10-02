import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Book from './components/Book';
import BookFormHandler from './components/BookFormHandler';
function App() {

  const [books, setBooks] = useState([])

const getBooks = () => {
  axios.get('/books')
  .then(res => setBooks(res.data))
  .catch(err => console.log(err.response.data.errMsg))
}

const addBooks = (newBook) => {
  axios.post('/books', newBook)
  .then( res => {
    setBooks(prevBooks => [...prevBooks, res.data])
  })
  .catch(err => console.log(err))
}

const deleteBook = (bookId) => {
  axios.delete(`/books/${bookId}`)
  .then(res => {
    setBooks(prevBooks => prevBooks.filter(book => book._id !== bookId))
  })
  .then(err => console.log(err))
}

const editBook = (updates, bookId) => {
  axios.put(`/books/${bookId}`, updates)
  .then(res => {
    setBooks(prevBooks => prevBooks.map(book => book._id !== bookId ? book : res.data))
  })
  .catch(err => console.log(err))

}

function handleFilter(e){
  if(e.target.value === "reset"){
    getBooks()
  }else{
    axios.get(`/books/search/genre?genre=${e.target.value}`)
    .then(res => setBooks(res.data))
    .catch(err => console.log(err))
  }
}

  useEffect(() => {
    getBooks()
  }, [])

  const booksList = books.map(book => 
  <Book
   {...book} 
   deleteBook = {deleteBook}
   editBook = {editBook}
    key = {book.title}/>)

  return (
    <div className="book-container">
      <BookFormHandler 
      btnText = 'Add Book'
      submit = {addBooks}/>
        <h4>Filter by genre</h4>
     <select onChange={handleFilter}>
       <option value="reset">All Genres</option>
       <option value="Fiction">Fiction</option>
       <option value="Non-Fiction">Non-Fiction</option>
       <option value="Romance">Romance</option>
       <option value="Comedy">Comedy</option>
       <option value="Adventure">Adventure</option>
     </select>
      {booksList}
   
    </div>
  );
}

export default App;
