import React from 'react'
import './container.css'
function Footer() {
  return (
    <div className="footerLinks">
      <span><a href="https://developer.nytimes.com/">New York Times API</a></span>
      
      <span><a href="https://en.wikipedia.org/wiki/The_New_York_Times">Established 1851</a></span>
      <br />
      <span><a href="/newsLetter">News Letter</a></span>
      <br />
      <span><a href="/topStories">Top Stories</a></span>
      <br />
      <span><a href="/account">Account</a></span>
    </div>
  )
}

export default Footer
