import React, { useState } from 'react'

function Todo(props) {

  const [edit, setEdit] = useState(false)
  const [todoText, setTodoText] = useState(props.todo.text)

  const toggleEdit = () => {
    setEdit(!edit)
    setTodoText(props.todo.text)
  }
  const handleEdit = (e) =>{
    setEdit(e.target.value)
  }

  const handleUpdate = (todoId, newValue) => {
    console.log('working');
    props.editTodo(todoId, newValue)
    toggleEdit()
    // setEdit(prev => prev.map(item=> (item.id === todoId ? newValue : item)))
  }



  console.log('edit mode: ', edit)

  return (

    <div>
      <input type='checkbox' checked={props.todo.isCompleted} onChange={() => props.completeTodo(props.todo.id)}></input>

      {!edit ? (
        <>
          <label
            onClick={() => props.completeTodo(props.todo.id)}
            className={props.todo.isCompleted ? 'todo-title-completed' : 'todo-title'}>
            {props.todo.text}
          </label>
          <button onClick={() => props.deleteTodo(props.todo.id)}>X</button>
          <button onClick={() => toggleEdit()} disabled={props.todo.isCompleted}>Edit</button>
        </>

      ) : (

        <>

          <div>

            <input type="text" value={todoText} onChange={handleEdit} />
            <button onClick={() => toggleEdit()}>Cancel</button>
            <button onClick={() => handleUpdate()} >Update</button>
          </div>

        </>

      )}
    </div>

  )

}

export default Todo;