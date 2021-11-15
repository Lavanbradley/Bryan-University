
import './App.css';
import React, { useState } from "react";
import axios from 'axios';
function App() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState("")
const register = () => {
  axios.post('http://localhost:4000/register', {
    username: usernameReg,
     password: passwordReg
    }).then((response) => {
      console.log(response);
    }).catch((err) =>{
      console.log(err)
    })
}
const login = () => {
  axios.post('http://localhost:4000/login', {
    username: username,
     password: password
    }).then((response) => {

    if(response.data.message){
      setLoginStatus(response.data.message)
    } else{
      setLoginStatus(response.data[0].username)
    }


    }).catch((err) =>{
      console.log(err)
    })
}

  return (
    <div className="App">
      <div className="registration">
        <h1>REGISTRATION</h1>

        <label>Username</label>

        <input type="text"
          onChange={(e) => {
          setUsernameReg(e.target.value)
          }} />

        <label>Password</label>

        <input type="text" onChange={(e) => {
          setPasswordReg(e.target.value)
        }} />

        <button onClick={register}>REGISTER</button>
      </div>
      <div className="login">
        <h1>LOGIN</h1>
        <input type="text" placeholder="Username..."
          onChange={(e) => {
          setUsername(e.target.value)
          }}/>
        <input type="text" placeholder="Password..."  
        onChange={(e) => {
          setPassword(e.target.value)
        }} />
        <button onClick={login}>LOGIN</button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
