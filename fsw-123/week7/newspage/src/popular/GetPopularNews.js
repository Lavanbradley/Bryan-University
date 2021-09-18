import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ShowPopularNews from './ShowPopularNews'
function GetPopularNews() {

  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     try{
  //       const res = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`
  //       )
  //       const articles = await res.json()
  //       console.log(articles.results);
  //       setArticles(articles.results)

  //     }catch(error){
  //       console.log(error);

  //     }
  //   }
  //   fetchArticles()
  // },[])

const newsArticles = articles.map((article) => {
  return <ShowPopularNews
  key={article.id}
  title={article.title}
  abstract={article.abstract}
  byline={article.byline}
  published_date={article.published_date}
  url={article.url}/>
})


  return (
    <div>
      <h1 className="topStories">Popular Stories</h1>
      {newsArticles}
    </div>
  )
}

export default GetPopularNews
