const express = require('express')
const app = express();

const PORT = 3000

let books = [
  { name: 'Lavan', location: 'Los Angeles' },
  { name: 'Carina', location: 'Los Angeles' },
  { name: 'Aaralyn', location: 'Los Angeles' },
  { name: 'Lisa', location: 'Los Angeles' },
  { name: 'Eric', location: 'Los Angeles' },
]
let looks = [
  { name: 'Lavan', location: 'Los Angeles' },
  { name: 'Carina', location: 'Los Angeles' },
  { name: 'Aaralyn', location: 'Los Angeles' },
  { name: 'Lisa', location: 'Los Angeles' },
  { name: 'Eric', location: 'Los Angeles' },
]


app.get('/books/', (req, res) => {
  res.send(books)

})



app.listen(PORT, () => {
  console.log(`App port started on port: ${PORT}`)
})