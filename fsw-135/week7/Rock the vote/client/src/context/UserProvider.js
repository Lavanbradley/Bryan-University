
import React, { useState, useEffect } from "react";
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
    issues: [],
    userIssues: [],
    errMsg: ''

  }

  const [userState, setuserState] = useState(initState)

  function handleAuthErr(errMsg) {
    setuserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }


  function resetAuthErr() {
    setuserState(prevState => ({
      ...prevState,
      errMsg: ''
    }))
  }

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
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }
  function login(credentials) {
    axios.post('/auth/login', credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
       
        getUserIssues()
        getIssues()
      
        setuserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setuserState({ user: {}, token: "", issues: [], userIssues: [] })

  }

  function addIssue(newIssue) {
    userAxios.post('/api/issue', newIssue)
      .then(res => {
        setuserState(prevState => ({
          ...prevState,
          issues: [...prevState.issues, res.data]
         
        }))
        getIssues()
        getUserIssues()
      })
      .catch(err => console.log(err.response.data.errMsg))
  }



  function addUpVote(newUpVote, id) {
    userAxios.put(`/api/issue/upVote/${id}`, newUpVote)
      .then(res => {

        getIssues()
        getUserIssues()
      })
      .catch(err => console.log(err.response.data.errMsg))
  }
  function addDownVote(newDownVote, id) {
    userAxios.put(`/api/issue/downVote/${id}`, newDownVote)
      .then(res => {

        getIssues()
        getUserIssues()
      })
      .catch(err => console.log(err.response.data.errMsg))
  }


  function getIssues() {
    userAxios.get('/api/issue/')
      .then(res => {
        var unsorted = [...res.data]
        var sortedArray = unsorted.sort(function (a, b) {
          
          return b.upVote - a.upVote
        })
        setuserState(prevState => ({
          ...prevState,
          issues: sortedArray
        }))
        
      })
      .catch(err => console.log(err.response.data.errMsg))
  }
  function getUserIssues() {
    userAxios.get('/api/issue/user')
      .then(res => {
        var unsorted = [...res.data]
        var sortedArray = unsorted.sort(function (a, b) {
          
          return b.upVote - a.upVote
        })
        setuserState(prevState => ({
          ...prevState,
          userIssues: sortedArray
        }))
        
      })
      .catch(err => console.log(err.response.data.errMsg))
  }
  






  return (
    <UserContext.Provider value={{ ...userState, signUp, login, logout, addIssue, addUpVote, addDownVote, resetAuthErr }}>
      {props.children}
    </UserContext.Provider>
  )
}