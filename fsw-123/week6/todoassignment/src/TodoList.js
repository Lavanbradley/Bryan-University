import Todo from "./Todo";
import React, { useState, useContext } from "react"
import { UserContext } from "./UserContext"
function TodoList(){//Prop functions from app.js

  const {todos, completeTodo, editTodo, deleteTodo} = useContext(UserContext)

  const listTodos = todos.map((todo) => {
    return <Todo
             key ={todo.id}
             todo = {todo}
             completeTodo ={completeTodo}
             deleteTodo = {deleteTodo}
             editTodo = {editTodo}
             />



  })
  return(
    <div>
      <ul>{listTodos}</ul>
    </div>
  )
}
export default TodoList;