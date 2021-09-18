import React from 'react'
import SavedItems from './SavedItems'
function SavedGrid({items}) {



  return (
    <div>
     {items.map(item => (
      <SavedItems key={item.url} item={item}/>
     ))}  
    </div>
  )
}

export default SavedGrid
