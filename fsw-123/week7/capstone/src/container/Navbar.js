import React from 'react'
import './container.css'
function Navbar() {
  return (
    <div className = "nav">
      <a href="/">HOME</a>
      <a href="/savedCharacters">SAVED</a>
      <a href="/characterNote">NOTES</a>
    </div>
  )
}

export default Navbar
