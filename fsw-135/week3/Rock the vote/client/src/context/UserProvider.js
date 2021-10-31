import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || "",
    issues: []
  }

  const [userState, setuserState] = useState(initState)


  function signUp(credentials) {
    axios.post('/auth/signup', credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        setuserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }
  function login(credentials) {
    axios.post('/auth/login', credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        getUserIssues()
        setuserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setuserState({ user: {}, token: "", issues: [] })
  }

  function addIssue(newIssue) {
    userAxios.post('/api/issue', newIssue)
      .then(res => {
        setuserState(prevState => ({
          ...prevState,
          issues: [...prevState.issues, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }  
  
 
  function getUserIssues() {
    userAxios.get('/api/issue/user')
      .then(res => {
        setuserState(prevState => ({
          ...prevState,
          issues: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }


  return (
    <UserContext.Provider value={{ ...userState, signUp, login, logout, addIssue }}>
      {props.children}
    </UserContext.Provider>
  )
}