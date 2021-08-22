import React from 'react'
import { BrowserRouter, Route, Switch, Link, useParams } from 'react-router-dom'
import { default as data } from '../data/posts.json'

function BlogPost() {

return <div>Now showing post {slug}</div>;
}

function Post() {

  let { slug } = useParams();
  let post = getPost(slug)

  function getPost(slug) {

    console.log('slug: ', slug)

    return data.find((post) => post.slug === slug)
    let content = data.find((post) => post.slug === slug)
    console.log('content: ', content)
    
  }

  const blogList = data.map(data =>
    <p id={`${data.key}`}>
      {post.content}
    </p>)
    console.log(blogList.content);
  return (
    <div>
      
      {blogList}
    </div>
  )
}
function Post(){
  
  <Route path= '/Post/:content'><Post/></Route>
  const {content} =useParams();
  return <h1>{content}</h1>
  
}

export default Post
