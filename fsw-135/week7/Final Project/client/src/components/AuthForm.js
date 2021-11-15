import React from 'react'
import './components.css';
function AuthForm(props) {
  const {
    handleChange, 
    handleSubmit, 
    btnText, 
    errMsg,
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
    <p style={{backgroundColor: "#c00000", color: "#ffffff", textAlign: "center"}}>{errMsg}</p>
  </form>
  </div>
  </div>
  )
}

export default AuthForm