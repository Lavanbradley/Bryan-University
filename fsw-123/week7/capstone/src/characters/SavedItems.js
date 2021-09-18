import React from 'react'
import './Saved.css'
function SavedItems({item}) {
 
  return (
    <div className = "savedItems">
     
     
    
    <div className = "showItems">
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
      <button >{item.name}</button>
    </div>

  )
}

export default SavedItems
