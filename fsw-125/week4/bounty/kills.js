const express = require('express')
const killsRouter = express.Router();
const { v4: uuidv4 } = require('uuid')


const kills = [
  { firstName: 'John-test', lastName: 'Smith', living: true, bountyAmount: 100000, type: 'Jedi', _id: uuidv4() },
  { firstName: 'Eric', lastName: 'William', living: true, bountyAmount: 200000, type: 'Sith', _id: uuidv4() },
  { firstName: 'Rick', lastName: 'Andres', living: false, bountyAmount: 300000, type: 'Jedi', _id: uuidv4() },
  { firstName: 'Omar', lastName: 'Johnson', living: true, bountyAmount: 500000, type: 'Sith', _id: uuidv4() },
  { firstName: 'Ruth', lastName: 'Chris', living: false, bountyAmount: 200000, type: 'Jedi', _id: uuidv4() },
  { firstName: 'Mike', lastName: 'Scott', living: true, bountyAmount: 700000, type: 'Jedi', _id: uuidv4() },
]


killsRouter
  .get('/', (req, res) => {
    res.send(kills)
  })

  .get('/:killId', (req, res) => {
    const killId = req.params.killId;
    const singleKill = kills.find(kill => kill._id === killId)
    res.send(singleKill)
  })


  .post('/', (req, res) => {
    const newKill = req.body;
    newKill._id = uuidv4();
    kills.push(newKill)
    console.log(kills)
    res.send(`Successfully added ${newKill.firstName} to the kills`)
  })

  .delete('/:killId', (req, res) => {
    const killId = req.params.killId;
    const killIndex = kills.findIndex(kill => kill._id === killId);
    kills.splice(killIndex, 1)

    res.send('You deleted a kill')
  })
  .put('/:killId', (req, res) => {
    const killId = req.params.killId;
    const killIndex = kills.findIndex(kill => kill._id === killId)
    const updatedKill = Object.assign(kills[killIndex], req.body)
    res.send(`successfully updated hit list${updatedKill}`)
  })




module.exports = killsRouter;