import React from 'react'
import './newsItem.css'
function NewsItem({ title, description, url, urlToImage }) {
  return (
    <div className='container'>
    <div className = 'newsItem'>
      <img className='newsImage' src={urlToImage} alt="New image" />
      <h3><a href={url}>{title}</a></h3>
      <p>{description}</p>
    </div>
    </div>
  )
}

export default NewsItem
