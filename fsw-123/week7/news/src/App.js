
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import NewsList from './components/NewsList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import NflList from './components/NflList';
function App() {
  const [items, setItems] = useState([]);



  return (
    <Router>
      
        
    <div className="App">
      <Navbar/>
    <Switch>
    <Route exact path="/">
      {/* 531597ad00884f85827a873a497c1dab */}
      <NewsList/>
      </Route>
     <Route path="/nfl">
     <NflList/>
     </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
