import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Blog from '../pages/Blog'
import About from '../pages/About'
import Contact from '../pages/Contact'
import './Container.css'
import React from 'react'

function Header() {
  return (
  <div className= 'header'>
    <Link to= '/Blog'>Blog</Link>
    
    <Link to= '/About'>About</Link>
   
    <Link to= '/Contact'>Contact</Link>
  </div>
  )
}

export default Header
