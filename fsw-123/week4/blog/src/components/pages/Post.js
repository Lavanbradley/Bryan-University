import React from 'react'
import {  useParams } from 'react-router-dom'
import { default as data } from '../data/posts.json'
import './Pages.css'
function Post(){
  const {slug} = useParams()
  const BlogPost = data.find((data) => {
    return data.slug === slug
  })
  return(
    <div className='postDiv'>
      <p class = 'postTitle'>{BlogPost.title}</p>
      <p class = 'postContent'>{BlogPost.content}</p>
    </div>
  )
}

export default Post
