import Navbar from './container/Navbar';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import CharacterGrid from './characters/CharacterGrid';
import Saved from './characters/Saved';

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(1);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://swapi.dev/api/people/?page=${query}`)
      console.log(result.data);
      console.log(result.data.results);
      setItems(result.data.results)
      setIsLoading(false)
    }
    fetchItems();
  }, [query])




  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>

          <Route exact path="/">
            <CharacterGrid isLoading={isLoading} query={query} setQuery={setQuery} items={items} />
          </Route>
          <Route path="/savedCharacters">
            <Saved items = {items} />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
