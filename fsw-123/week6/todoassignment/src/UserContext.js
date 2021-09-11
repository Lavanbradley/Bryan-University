import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid'
import {listoftodos} from './data'
export const UserContext = React.createContext();

function UserProvider(props){
  const [todos, setTodos] = useState(listoftodos) //passing data from data into state

  const addTodo = text => {
    const newTodos = [  //Spreading todos into newTodos
      ...todos,
      {
        id: uuidv4(),  //Giving new todo an ID
        text: text,    //Setting text equal to what is typed
        isCompleted: false  //setting default completed value
      
      }
    ];
    setTodos(newTodos) //Passing new todo into state
  }
  
  const completeTodo = id => {
  const filterTodos = [...todos]; //Spreading todos into filterTodos
  const index = filterTodos.findIndex(todo => todo.id === id); //Finding index of todo by it's ID
  filterTodos[index].isCompleted = !filterTodos[index].isCompleted; //Toggling isCompleted
  setTodos(filterTodos); //Passing todo back into state
  }
   const deleteTodo = id => {
     const filterTodos = [...todos]; //Spreading todos into filterTodos
     const newTodos = filterTodos.filter(todo => todo.id !== id) //Filtering todos and removing todo that was deleted
     setTodos(newTodos); //Passing todo back into state
   }
  
   const editTodo = (id, text) => {
     const filterTodos = [...todos]; //Spreading todos into filterTodos
     const index = filterTodos.findIndex(todo => todo.id === id); //Finding todo we want to edit by its ID
     filterTodos[index].text = text; 
     setTodos(filterTodos) //Passing todo back into state
   };
  



  return(
    <UserContext.Provider
    value ={{
      addTodo, editTodo,deleteTodo,completeTodo, todos
    }}>
      {props.children}
      </UserContext.Provider>
  )
}


export default UserProvider;
