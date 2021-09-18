import React from 'react'
import CharacterItem from './CharacterItem'


const CharacterGrid = ({ items, isLoading, query, setQuery }) => {
  console.log(items);
  console.log(query);
    function nextPage(){
      return(
        setQuery(query + 1 ) 
      ) 
    }
    function backPage(){
      return(
        setQuery(query - 1 ) 
      ) 
    }
  return(
    
    isLoading ? (<h1>Loading data</h1>) : (<section className='cards'>


    
    {items.map(item => (
      <CharacterItem key={item.url} item={item}/>
      
     ))} 
 
    
 
 <button onClick={nextPage} className ="next">Next</button>
 <button onClick={backPage} className ="next">Back</button>
 </section>)
 
 

  )
}

export default CharacterGrid