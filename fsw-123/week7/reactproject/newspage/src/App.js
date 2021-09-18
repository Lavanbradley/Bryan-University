
import './App.css';
import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm';


const App = () => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState('everything')
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    const fetchArticles = async () => {
      try {

        const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`
        )
        const articles = await res.json()
        console.log(articles);
        setArticles(articles.response.docs)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }

    }

    fetchArticles();
  }, [term])

  return (
    <>
     <div className="showcase">
       <div className="overlay ">
          <h1 >Viewing articles about {term}</h1> 
         <SearchForm searchText={(text) => setTerm(text)}/>
       </div>
     </div>


       {isLoading ? <h1 >Loading...</h1> : <section>
     {articles.map((article) =>{
       const {abstract, headline:{main}, byline:{original}, lead_paragraph, news_desk, section_name, web_url, _id, word_count} = article

       return(
         <article key={_id} >
           <h2>{main}</h2>
           <p>{abstract}</p>
           <p>{lead_paragraph}</p>
           <ul>
             <li>{original}</li>
             <li><span>News desk:</span> {news_desk}</li>
             <li><span>Section name:</span> {section_name}</li>
             <li><span>Word count: </span>{word_count}</li>
           </ul>
           <a href={web_url} target="_blank"  >Web Resource</a>
         </article>
       )
     })}

      </section> }
    </>
  );
}

export default App;
