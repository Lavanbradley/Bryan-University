const express = require('express')
const app = express();

const PORT = 3000


let movies = [
 {movie: 'Die Hard'},
  {movie: 'Tropic Thunder'},
  {movie: 'Friday Night Lights'},
  {movie: 'Finding Nemo'},
  {movie: 'Drive'},
  {movie: 'Get Out'},
  {movie: 'Crazy Rich Asians'},
  {movie: 'Deep Blue Sea'},
]

let actors = [
  {name: 'Bruce Willis', year: '1989'},
  {name: 'Michael B Jordan'},
  {name: 'Kevin Hart'},
  {name: 'Matthew McConaughey'},
  {name: 'Denzel Washington'},
  {name: 'Dwayne Johnson'},
  {name: 'Eddie Murphy'}
]

let dates = [
  {date: '1989'},
  {date: '1990'},
  {date: '1991'},
  {date: '1992'},
  {date: '1993'},
  {date: '1994'},
  {date: '1995'}
]




app.get('/movies', (req, res) => {
  res.send(movies)
 
})
app.get('/actors', (req, res) => {
  res.send(actors)
 
})
// app.get('/actors/:year', (req, res) => {
//   // res.send(actors)
//   res.json(actors.filter((actor)=>{
//     return actor.year
//   }))
 
// })
app.get('/dates', (req, res) => {
  res.send(dates)
 
})

app.listen(PORT, () => {
  console.log(`App port started on port: ${PORT}`)
})