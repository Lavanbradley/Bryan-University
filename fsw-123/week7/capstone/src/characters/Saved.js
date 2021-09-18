import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SavedGrid from './SavedGrid'
function Saved() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState(1)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://swapi.dev/api/people/?page=${query}`)                
      console.log("TEST!",result.data);
      console.log("TEST!",result.data.results);
      
      setItems(result.data.results)
      setIsLoading(false)//Got the data, et loading to false
    }
    fetchItems();
  }, [query])


  return (
    <div>
      <SavedGrid items={items}/>
    </div>
  )
}

export default Saved
