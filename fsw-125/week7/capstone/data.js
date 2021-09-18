const express = require('express')
const { v4: uuidv4 } = require('uuid')
const dataRouter = express.Router();

const data = [
  {team: 'Raiders', city: "Las Vegas", superbowl: true, players: ["Derek Carr",' ', "Josh Jacobs", ' ' ,"Henry Ruggs III"], established: 1960, _id: uuidv4() },
  {team: 'Steelers', city: "Pittsburgh", superbowl: true, players: ["Ben  Roethlisberger", ' ',"Najee Harris", ' ',"JuJu Smith-Schuster"], established: 1933, _id: uuidv4() },
  {team: 'Seahawks', city: "Seattle", superbowl: true, players: ["Russell Wilson", ' ',"Chris Carson",' ' ,"DK Metcalf"], established: 1976, _id: uuidv4() },
  {team: 'Panthers', city: "Carolina", superbowl: false, players: ["Sam Darnold",' ' ,"Christian McCaffrey", ' ',"Robby Anderson"], established: 1987, _id: uuidv4() },
  {team: 'Texans', city: "Houston", superbowl: false, players: ["Tyrod Taylor",  ' ',"Mark Ingram II", ' ',"Bradin Cook"], established: 1997, _id: uuidv4() },
]


dataRouter
.get('/', (req, res) => {
  res.status(200).send(data)
})

.get('/:dataId', (req, res) => {
  const dataId = req.params.dataId;
  const singleData = data.find(index => index._id === dataId)
  res.send(singleData)

 
})




.get('/search/team',(req,res)=>{
  const dataItems = req.query.team;
  const filteredData = data.filter(item => item.team === dataItems)
  res.send(filteredData[0].players)
})


.post('/', (req, res) => {
  const newData = req.body;
  newData._id = uuidv4();
  data.push(newData)
  console.log(data)
  res.status(201).send(`Successfully added ${newData.team} to the data`)
})

.put('/:dataId', (req, res) => {
  const dataId = req.params.dataId;
  const dataIndex = data.findIndex(index => index._id === dataId)
  const updatedData = Object.assign(data[dataIndex], req.body)
  res.send(`successfully updated data list${updatedData}`)
})

.delete('/:dataId', (req, res) => {
  const dataId = req.params.dataId;
  const dataIndex = data.findIndex(index => index._id === dataId);
  data.splice(dataIndex, 1)
  res.send('You deleted a team')
})

module.exports = dataRouter;