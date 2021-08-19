import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'




function Body() {
  return (

    <div>
      <h1>Body</h1>
      <Switch>
   <Route path = "/about"><About/></Route>
   <Route path = "/contact"><Contact/></Route>
   <Route path = "/"><Blog/></Route>


      </Switch>
    </div>
 
  )
}

export default Body
