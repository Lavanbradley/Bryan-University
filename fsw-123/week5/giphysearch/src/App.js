import Search from './Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="appHeader">Search For A Gif!</h1>
      <Search initialQuery='cat'/>
    </div>
  );
}

export default App;
