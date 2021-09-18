
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ShowTopStories from './ShowTopStories';



function GetTopStories() {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() =>{
  //   const fetchArticles = async () => {
  //     try{
  //       const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`
  //       )
  //       const articles = await res.json()
  //       console.log(articles);
  //       setArticles(articles.results);
  //     }catch(error){
  //       console.log(error);
  //     }
  //   }
  //   fetchArticles();
  // },[])
  
const newsArticles = articles.map((article) => {
  return <ShowTopStories
  key={article.title}
  subsection={article.subsection}
  title={article.title}
  url={article.url}
  byline={article.byline}
  published_date={article.published_date}/>
})





  return (
    <div>
      <h1 className="topStories">Top Stories</h1>
      {newsArticles}
    </div>
  )
}

export default GetTopStories
