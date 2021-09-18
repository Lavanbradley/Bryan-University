import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GetPokemon from './components/GetPokemon';
function App() {
  const [pokemon, setPokemon] = useState([]);

useEffect(() => {
  const getPoke = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon')
    setPokemon(res.data)
    console.log(res.data);
    // console.log(res.data.game_indices[0].version.name);
  }
  getPoke();
},[])
  return (
    <div className="App">
      <GetPokemon/>
    </div>
  );
}

export default App;
