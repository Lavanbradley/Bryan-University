const express = require('express')
const tvShowRouter = express.Router();
const { v4: uuidv4 } = require('uuid')

let tvShows = [
  { title: 'Mr.Mayor test', channel: 'Erik TBS', _id: uuidv4() },
  { title: 'Mr.Mayor2', channel: 'Erik TBS2', _id: uuidv4() },
  { title: 'Mr.Mayor3', channel: 'Erik TBS3', _id: uuidv4() },
  { title: 'Mr.Mayor4', channel: 'Erik TBS4', _id: uuidv4() },

]

tvShowRouter
  .get('/', (req, res) => {
    res.send(tvShows)
  })

  .get('/:tvShowId', (req, res) => {
    const tvShowId = req.params.tvShowId;
    const singularTvShow = tvShows.find(show => show._id === tvShowId)
    res.send(singularTvShow)
  })
  .post('/', (req, res) => {
    const tvShow = req.body;
    tvShow._id = uuidv4();
    tvShows.push(tvShow)

    console.log(tvShows)

    res.send(`Successfully added ${tvShow.title} to database`)
  })

  .delete('/:tvShowId', (req, res) => {
    const tvShowId = req.params.tvShowId;
    const tvIndex = tvShows.findIndex(tvShow => tvShow._id === tvShowId)
    tvShows.splice(tvIndex, 1)

    res.send('Resource successfully deleted!')
  })

module.exports = tvShowRouter;