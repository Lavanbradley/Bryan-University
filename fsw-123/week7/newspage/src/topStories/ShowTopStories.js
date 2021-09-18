import React from 'react'

function ShowTopStories({title,subsection, url,byline,published_date}) {
  return (
    <>
    
    <div className="articleSection">
      <article key={title}>
      
      <h1>{title}</h1>
      <h3>{subsection}</h3>
      <h5>{byline}</h5>
      
      <a href={url} target="_blank">Web Resource</a>
      <span>{published_date}</span>
      </article>
    </div>
    </>
  )
}

export default ShowTopStories
