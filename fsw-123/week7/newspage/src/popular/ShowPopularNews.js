import React from 'react'

function ShowPopularNews({id,published_date,title,abstract,byline,url}) {
  return (
    <div className="articleSection">
      <h1>{title}</h1>
      <h4>{byline}</h4>
      <p>{abstract}</p>
      <span>{published_date}</span>
      <a href={url} target="_blank">Web Resource</a>
    </div>
  )
}

export default ShowPopularNews
