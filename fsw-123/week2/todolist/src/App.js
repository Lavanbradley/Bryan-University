
import './App.css';
import { Todos } from './Storage';
import TodoList from './Todolist';
function App() {
  
  return (
    <div className="App">
      <TodoList Todos = {Todos}/>
      
    </div>
  );
}

export default App;
