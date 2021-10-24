import './components.css';
import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'
const initInputs = { username: "", password: "" }

export default function Auth(){
  const { signUp, login} =useContext(UserContext)
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

   


  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signUp(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
  login(inputs)
  }

  return (
    <div className="auth-container">
      <h1>ROCK THE VOTE</h1>
      <div className="test">
      { !toggle ?
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign up"
          />
          <p onClick={() => setToggle(prev => !prev)}>Login</p>
        </>
      :
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
          />
          <p onClick={() => setToggle(prev => !prev)}>Sign up</p>
        </>
        
      }
      </div>
    </div>
  )
}


