const express = require('express')
const todoRouter = express.Router();
const { v4: uuidv4 } = require('uuid')


const todos = [
  {
    name: 'Bank',
    description: 'Pay loan',
    completed: false,
    _id: uuidv4()
  },
  {
    name: 'School',
    description: 'Complete todo assignment',
    completed: false,
    _id: uuidv4()
  },
  {
    name: 'Store',
    description: 'We need groceries',
    completed: false,
    _id: uuidv4()
  },
  {
    name: 'Car',
    description: 'Pay car loan',
    completed: false,
    _id: uuidv4()
  },
  {
    name: 'Mom',
    description: 'Buy birthday gift',
    completed: false,
    _id: uuidv4()
  }
]

todoRouter

  .get('/', (req, res) => {
    res.send(todos)
  })

  .get('/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    const singleTodo = todos.find(todo => todo._id === todoId)
    res.send(singleTodo)
  })

  .post('/', (req, res) => {
    const newTodo = req.body;
    newTodo._id = uuidv4();
    todos.push(newTodo);
    res.send(`Successfully added${newTodo.name} to todos`)
  })

  .delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex(todo => todo._id === todoId);
    todos.splice(todoIndex, 1)
    res.send('You deleted a todo')
  })

  .put('/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(`successfully updated todo list ${updatedTodo}`)
  })

module.exports = todoRouter;