import { useState, useEffect } from 'react';



function UseEffectForm() {
  const [search, setSearch] = useState('cat')
  const [giphy, setGiphy] = useState([]);


  const API = "hOGNSGtB4TI33a2JdGSa82ly2pnS5aB8"
  const URL = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API}`;


  useEffect(() => {
    fetch(`api.giphy.com/v1/gifs/${search}`)
    .then((response) => response.json())
    .then((data) => setGiphy(data))
  })
  return (
    <div>
      
    </div>
  )
}

export default UseEffectForm
