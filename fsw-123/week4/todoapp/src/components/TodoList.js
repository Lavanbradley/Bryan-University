import React from 'react'

function TodoList(props) {
    return (
        <div>
            <h1>List of Todos</h1>
            {props.data.map(function(todo, index) {
                return (
                <div key={index}>
                    <input type='checkbox' checked={todo.isCompleted} onChange={() => props.completeTodo(todo.id)}></input>
                    <label 
                        onClick= {() => props.completeTodo(todo.id)} 
                        className={todo.isCompleted ? 'todo-title-completed' : 'todo-title'}>
                        {todo.text}
                    </label>
                    <button onClick={() => props.deleteTodo(todo.id)}>X</button>
                </div>
                )
            })}
        </div>
    )
}

export default TodoList
