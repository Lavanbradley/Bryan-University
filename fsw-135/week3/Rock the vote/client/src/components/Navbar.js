import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './components.css';
import {UserContext} from '../context/UserProvider'
function Navbar() {
  const {logout} = useContext(UserContext)
  return (
    <div className='navbar'>
      <Link className='links' to="/profile">Profile</Link>
      <Link className='links' to="/issues">Issues</Link>
      <button onClick={logout} className='logout links'>Logout</button>
    </div>
  )
}

export default Navbar
