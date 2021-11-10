import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './components.css';
import {UserContext} from '../context/UserProvider'
function Navbar() {
  const {logout, token} = useContext(UserContext)
  return (
    <div className='navbar'>
      {token && <Link className='links' to="/profile">Profile</Link>}
      <Link className='links' to="/public">Public</Link>
      {token && <button onClick={logout} className='logout links' >Logout</button>}
    </div>
  )
}

export default Navbar
