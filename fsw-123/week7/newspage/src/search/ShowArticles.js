import React, { useState } from 'react'

function ShowArticles({ abstract, headline, byline, lead_paragraph, news_desk, section_name, web_url, _id, word_count }) {
  return (
    <div className="articleSection">
      <article key={_id} >
        <h2>{headline}</h2>
        <p>{abstract}</p>
        <p>{lead_paragraph}</p>
        <ul>
          <li>{byline}</li>
          <li><span>News desk:</span> {news_desk}</li>
          <li><span>Section name:</span> {section_name}</li>
          <li><span>Word count: </span>{word_count}</li>
        </ul>
        <a href={web_url} target="_blank"  >Web Resource</a>
      </article>
    </div>
  )
}

export default ShowArticles
