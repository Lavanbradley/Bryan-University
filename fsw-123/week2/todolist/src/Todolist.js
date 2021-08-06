function TodoList({Todos}){




  return(
      <h1>{Todos.map(item =>{
        return (
          <div>
            <input type="checkbox" />
            {item.text}
          </div>
        )
      }
        )}</h1>
  )
}
export default TodoList;