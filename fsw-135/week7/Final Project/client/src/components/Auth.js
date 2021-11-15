import './components.css';
import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'
const initInputs = { username: "", password: "" }

export default function Auth(){
  const { signUp, login, errMsg, resetAuthErr} =useContext(UserContext)
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

  function toggleForm(){
    setToggle(prev => !prev)
    resetAuthErr()
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
            errMsg={errMsg}
          />
          <p onClick={() => toggleForm()}>Login</p>
        </>
      :
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <p onClick={() => toggleForm()}>Sign up</p>
        </>
        
      }
      </div>
    </div>
  )
}
