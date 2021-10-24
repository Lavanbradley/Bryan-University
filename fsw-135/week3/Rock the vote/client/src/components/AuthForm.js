import React from 'react'
import './components.css';
function AuthForm(props) {
  const {
    handleChange, 
    handleSubmit, 
    btnText, 
    inputs: {
      username, 
      password
    } 
  } = props
  return (
    <div  >
      <div>
    <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      value={username} 
      name="username" 
      onChange={handleChange} 
      placeholder="Username"/>
    <input 
      type="password" 
      value={password} 
      name="password" 
      onChange={handleChange} 
      placeholder="Password"/>
    <button className = 'test'>{ btnText }</button>
  </form>
  </div>
  </div>
  )
}

export default AuthForm
