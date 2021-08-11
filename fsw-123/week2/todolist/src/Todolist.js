function TodoList({Todos}){




  return(
      <h3>{Todos.map(item =>{
        return (
          <div>
            <input type="checkbox" />
            {item.text}
          </div>
        )
      }
        )}</h3>
  )
}
export default TodoList;