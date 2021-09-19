
import './App.css';
import React, { useState, useEffect } from 'react'
import ShowArticles from './search/ShowArticles';
import SearchForm from './search/SearchForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './container/Navbar';
import ShowTopStories from './topStories/ShowTopStories';
import GetTopStories from './topStories/GetTopStories';
import NewsLetterForm from './newsLetter/NewsLetterForm';
import Account from './account/Account';

import Footer from './container/Footer';
import ShowPopularNews from './popular/ShowPopularNews';
import GetPopularNews from './popular/GetPopularNews';



const App = () => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState('everything')
  
  



  useEffect(() => {
    const fetchArticles = async () => {
      try {

        const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`
        )
        const articles = await res.json()
        console.log(articles);
        setArticles(articles.response.docs)
    
      } catch (error) {
        console.log(error);
      }

    }

    fetchArticles();
  }, [term])

  



  const newsArticles = articles.map((article) => {
    return <ShowArticles
   
      key={article._id}
      abstract={article.abstract}
      lead_paragraph={article.lead_paragraph}
      news_desk={article.news_desk}
      section_name={article.section_name}
      web_url={article.web_url}
      word_count={article.word_count}
      headline={article.headline.main}
      byline={article.byline.original}


    />
  })
  

  return (
    <Router>
      <>
        <Navbar />
        <div className="showcase">

        </div>

        <Switch>
          <Route exact path="/">
            <div className="overlay ">
              <h1 >Viewing articles about {term}</h1>
              <SearchForm searchText={(text) => setTerm(text)} />


              <div >
                {newsArticles} 
              </div>

            </div>
          </Route>
        </Switch>

       <Switch>
         <Route path="/topStories">
          <div className="topArticles">
            <GetTopStories/>
          </div>
         </Route>
       </Switch>

       <Switch>
         <Route path ="/newsLetter">
           <NewsLetterForm />
         </Route>
       </Switch>

       <Switch>
         <Route path="/account">
           <Account />
         </Route>
       </Switch>
       <Switch>
         <Route path="/popularStories">
          <GetPopularNews/>
         </Route>
       </Switch>

      <Footer/>

      </>
     </Router>
  );
}

export default App;
