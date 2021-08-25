import { useEffect, useState } from 'react';
import './App.css';





function App() {
  const [todo, setTodo] = useState({});
  const [flag, setFlag] = useState(false)




useEffect(()=> {
  const getTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => setTodo(data))
    .catch((error) => console.log(error))
  }

   //Happens whe useEffect is triggered (after component renders)

   console.log('useEffect triggered');

  getTodo();
}, []);


  //happens each component render
  console.log('component is rendering', todo);

const forceRender = () => {



  //changing state variable, which causes component to re render

  setFlag(true)
}


  return (
    <div className="App">
    <p>title: {todo.title}</p>
    <button onClick = {forceRender}>Force re-render</button>
    </div>
  );
}

export default App;
