const express = require('express')
const app = express();

const PORT = 3000

let users = [
  {name: 'Lavan', location: 'Los Angeles'},
  {name: 'Carina', location: 'Los Angeles'},
  {name: 'Aaralyn', location: 'Los Angeles'},
  {name: 'Lisa', location: 'Los Angeles'},
  {name: 'Eric', location: 'Los Angeles'},
]
// let dates = [
//   {date: '1989'},
//   {date: '1989'},
//   {date: '1989'},
// ]

app.get('/users', (req, res) => {
  res.send(users)
})
// app.get('/users/dates', (req, res) => {
//   res.send(dates)
// })


app.listen(PORT, () => {
  console.log(`App port started on port: ${PORT}`)
})









