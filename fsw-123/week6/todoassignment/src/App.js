import React, { useState, useContext } from "react"
import { UserContext } from "./UserContext"
import TodoList from './TodoList'
import TodoForm from './TodoForm'


import './App.css';

function App() {




  return (
    <div className="App">
      <div><h1 className="todoHeader">Todo List</h1></div>
     
      
     <TodoForm/> {/* Passing addTodo to TodoForm  */ }
      
      
      <TodoList  
     
       />  {/* Passing functions to todoList  */ }

    </div>
  );
}

export default App;
