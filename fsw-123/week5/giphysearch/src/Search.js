import { useState, useEffect } from "react";
import './App.css';
function Search ({initialQuery}){

const [loader, setLoader] = useState(false)
const [err, setErr] = useState(false)
const [Src, setSrc] = useState('')
const [alt, setAlt] = useState('')

const fetchImage = (query = initialQuery) => {
  setLoader(true)
  const encodedQuery = encodeURIComponent(query)
  const url = `http://api.giphy.com/v1/gifs/random?api_key=hOGNSGtB4TI33a2JdGSa82ly2pnS5aB8&tag=${encodedQuery}`

  fetch(url, {
    method: 'GET',

  }).then(function(res){
    if(res.ok){
      return res.json();
    }
    return Promise.reject(res)
  }).then(function({data}){
    setLoader(false)
    setSrc(data.fixed_height_downsampled_url)
    setAlt(data.title)
  }).catch(function(error){
    setLoader(false)
    setErr(true)
    console.warn('Something went wrong');
  })
}

const handleSubmit = (event) => {
  event.preventDefault();
  fetchImage(event.target.query.value)
  
}

useEffect(() =>{
  fetchImage()
}, [initialQuery])

  return(
    <div>
      <br/><br/>
      <header>
        <form onSubmit = {handleSubmit}>
          <input type = 'text' name = 'query' placeholder ='Search for gif!' className ="search"/>
          <button type = 'submit'>Search</button>
        </form>
      </header>
      <br/><br/>
      <main>
        <section>
          {loader && <div>Searching...</div>}
          {err && <div> Opps! </div>}
          {!loader && !err && !Src && <div> No Results found</div>}
          {!loader && !err && Src && <div> <img src={Src} alt={alt}/></div>}
        </section>
      </main>



    </div>
  )



}
export default Search;