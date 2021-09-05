import Todo from "./Todo";

function TodoList({todos, completeTodo, deleteTodo, editTodo}){//Prop functions from app.js
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