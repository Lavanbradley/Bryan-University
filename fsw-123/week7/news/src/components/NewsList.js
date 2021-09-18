import axios from 'axios';
import React, {useState, useEffect} from 'react'
import NewsItem from './NewsItem';

const NewsList = () => {
const [articles, setArticles] = useState([]);

useEffect(() =>{
  const getArticles = async () => {
    const res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=football&apiKey=531597ad00884f85827a873a497c1dab")
   
    setArticles(res.data.articles)

    console.log(res.data.articles);
  }
  getArticles();
}, [])


  return (
    <div>
      {articles.map(({title, description, url, urlToImage}) =>(
        <NewsItem title={title} description={description} url={url} urlToImage={urlToImage}/>
      ) )}
    </div>
  )
}

export default NewsList
