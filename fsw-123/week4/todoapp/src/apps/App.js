import React, { useState } from "react"
import "./App.css"
import TodoList from "../components/TodoList"
import { listoftodos } from '../data/store'
import TodoForm from "../components/TodoForm";
function App() {

  const [todoItems, setTodos] = useState(listoftodos)

  const completeTodo = id => {
    let updatedTodos = [...todoItems]  // make a copy of the existing todos stored in state

    const index = updatedTodos.findIndex(todo => todo.id === id)  // find the specific todo in array to update

    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted  // toggle the isCompleted property of that todo

    setTodos(updatedTodos)  // update the todos array
  }

  const deleteTodo = (id) => {
    let updatedTodos = [...todoItems]  // make a copy of the existing todos stored in state
    let filteredTodos = updatedTodos.filter(todo => todo.id !== id) // filter the copy of the specific todo to be deleted
    
    setTodos(filteredTodos) // update the todos array
  }

  const addTodo = text =>{
    if (!text.text || /^\s*$/.test(text.text)) {
      return
    }
    const newTodos = [text, ...todoItems]
setTodos(newTodos)
  }






  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <TodoList data={todoItems} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
