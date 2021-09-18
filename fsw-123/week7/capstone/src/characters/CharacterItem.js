import React, {useState} from 'react'


const CharacterItem = ({item}) => {{/*Getting item from characterGrid */}
  



return (
    
  <div className='card'>
  <div className='card-inner'>
    <div className='card-front'>
      <h1>{item.name}</h1>
      <h1>Flip A card</h1>
      <h1> Any card</h1>
    </div>
    <div className='card-back'>
      <h1>{item.name}</h1>
      <ul>
        <li>
          <strong> Height:</strong> {item.height}
        </li>
        <li>
          <strong>Mass:</strong> {item.mass}
        </li>
        <li>
          <strong>Hair Color:</strong> {item.hair_color}
        </li>
        <li>
          <strong>Birth Year:</strong> {item.birth_year}
        </li>
      </ul>
    
    </div>
  </div>
</div>
  )
}

export default CharacterItem