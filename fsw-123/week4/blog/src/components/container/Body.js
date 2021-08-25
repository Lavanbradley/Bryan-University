import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import './Container.css'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import Post from '../pages/Post'




function Body() {
  return (

    <div className = 'header'>
      
      <Switch>
   <Route path = "/about"><About/></Route>
   <Route path = "/contact"><Contact/></Route>
   <Route path = "/"><Blog/></Route>
<Post/>

      </Switch>
    </div>
 
  )
}

export default Body
