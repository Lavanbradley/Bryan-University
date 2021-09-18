
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowPokemon from './ShowPokemon';

function GetPokemon() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPoke = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      setPokemon(res.data.results)

    }
    getPoke();
  }, [])

  return (
    <div>
      {pokemon.map(({ name, url }) => (
        <ShowPokemon name={name} url={url} />
      ))}
    </div>
  )
}

export default GetPokemon
