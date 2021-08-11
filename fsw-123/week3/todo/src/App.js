import React, {useState} from 'react';
import './App.css';
import { Todos } from './Store';
import TodoList from './Todolist';
function App() {
const [todos, setTodos] = useState(Todos)

const complete = (id) => {
console.log(id)
setTodos(todos.map((todo, index) =>{
const newTodo = [...todo,
  {
    isCompleted: true
  }
]
  setTodos(newTodo)
   //Is this the todo that was clicked(id)
   //If yes, have another if statement, is it completed?
   //else return todo as is, if completed make false
})) 

}
const deleteTodo = (id) => {
console.log(id)
}
  return (
    <div className="App">
     <TodoList todo = {todos} 
     completeTodo = {complete} deleteTodo = {deleteTodo}
     />
    </div>
  );
}

export default App;
