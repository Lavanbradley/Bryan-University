const express = require('express')
const tvShowRouter = express.Router();
const { v4: uuidv4 } = require('uuid')

let tvShows = [
  { title: 'Mr.Mayor', channel: 'Erik TBS', _id: uuidv4() },
  { title: 'Mr.Mayor2', channel: 'Erik TBS2', _id: uuidv4() },
  { title: 'Mr.Mayor3', channel: 'Erik TBS3', _id: uuidv4() },
  { title: 'Mr.Mayor4', channel: 'Erik TBS4', _id: uuidv4() },

]

tvShowRouter
.get('/', (req, res) => {
  res.send(tvShows)
})
.post('/', (req, res) => {
  const tvShow = req.body;
  tvShow._id = uuidv4();
  tvShows.push(tvShow)

  console.log(tvShows)

  res.send(`Successfully added ${tvShow.title} to database`)
})

module.exports = tvShowRouter;