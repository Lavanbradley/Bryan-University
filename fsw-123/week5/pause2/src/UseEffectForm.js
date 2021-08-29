import { useState, useEffect } from 'react';


function UseEffectForm() {
  const [search, setSearch] = useState('sports')
  const [news, setNews] = useState([]);

  
  const API = "4019bcb6e56244849f7d566903beb866";
const URL = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API}`;


useEffect(() =>{
  fetch(`https://newsapi.org/v2/everything?q=sports&apiKey=${API}`)
  .then((response) => response.json())
  .then((data) => setNews(data.articles))
  .catch((error) => console.log(error))
}, []);


const getNews = () => {
  fetch(URL)
  .then((response) => response.json())
  .then((data) => setNews(data.articles))
  .catch ((error) => console.log(error))
}

const handleClick = () => {
  getNews();
}
 const handleChange = (event) => {
   setSearch(event.target.value)
 }

  return (
    <div className="App">
     <header>
       <input 
       type="text"
       value= {search}
       onChange= {handleChange}
       />
       <button onClick = {handleClick}>Search news</button>
     </header>
     <main>
    {
      news && 
      news.map((item, index) => <div className= "article" key = {index}>{item.description}</div>)
    }


     </main>
    </div>
  );
}
export default UseEffectForm;