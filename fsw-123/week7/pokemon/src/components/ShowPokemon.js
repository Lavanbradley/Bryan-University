import React from 'react'

function ShowPokemon({name, url}) {



  return (
    <div>
      <h1>{name}</h1>
      <a href="{url}">{url}</a>

    </div>
  )
}

export default ShowPokemon
