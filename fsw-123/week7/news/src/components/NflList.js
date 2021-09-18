import axios from 'axios';
import React, {useState, useEffect} from 'react'

import NflItem from './NflItem';
function NflList() {
  const [articles, setArticles] = useState([]);

useEffect(() =>{
  const getArticles = async () => {
    const res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=nfl&apiKey=531597ad00884f85827a873a497c1dab")
   
    setArticles(res.data.articles)

    console.log(res);
  }
  getArticles();
}, [])


  return (
    <div>
      {articles.map(({title, description, url, urlToImage}) =>(
        <NflItem title={title} description={description} url={url} urlToImage={urlToImage}/>
      ) )}
    </div>
  )
}

export default NflList

