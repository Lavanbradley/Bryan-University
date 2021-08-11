
import './App.css';
import { Todos } from './Storage';
import TodoList from './Todolist';
function App() {
  
  return (
    <div className="App">
      <h1>List of Todos</h1>
      <TodoList Todos = {Todos}/>
      
    </div>
  );
}

export default App;
