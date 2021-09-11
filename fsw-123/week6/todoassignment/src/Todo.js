import { useState, useContext } from 'react'
import './App.css';
import { UserContext } from './UserContext'

function Todo({ todo }) { //Props from app.js


  const { completeTodo, editTodo, deleteTodo } = useContext(UserContext)
  console.log(todo);
  let completed = { textDecorationLine: 'none' }

  if (todo.isCompleted) {
    completed = { textDecorationLine: 'line-through' }
  }

  const [edit, setEdit] = useState(false) //Setting edit mode to false
  const [error, setError] = useState(false)
  const [text, setText] = useState(todo.text) //Ask tutor where todo is coming from

  const toggleEdit = () => {
    setEdit(!edit) //Turns edit to true
    setText(todo.text) //Ask tutor
    setError(false)
    console.log(todo.text);
  };

  const handleEdit = (event) => {
    (event.target.value === "") ? setError(true) : setError(false) //If input is empty display error, else dont.
    setText(event.target.value); //Passing input text into state
  }

  const handleUpdate = (id, text) => {
    editTodo(id, text)
    console.log(id, text);
    toggleEdit();
  }
  
  

  return (
    <div >
      <div>

      </div>


      {!edit ? (
        <div className='todoJs'>
          <input
            type='checkbox'
            checked={todo.isCompleted}
            onChange={() => completeTodo(todo.id)}
          />
          <label style={completed} for={todo.id}>{todo.text}</label>
        </div>
      ) : (
        <div>
          <input type='text' value={text} onChange={handleEdit} />
        </div>
      )}
      {!edit ? (!todo.isCompleted ?
        (<div>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => toggleEdit()}>Edit</button>
        </div>) :
        (<div>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button disabled onClick={() => toggleEdit()}>Edit</button>
        </div>)
      ) : (
        <div>
          <button disabled={error} onClick={() => handleUpdate(todo.id, text)}>Submit</button>
          <button onClick={() => toggleEdit()}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Todo
