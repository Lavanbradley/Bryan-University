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
    comments: [],
    errMsg: ''

  }

  const [userState, setuserState] = useState(initState)

  function handleAuthErr(errMsg){
    setuserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }


  function resetAuthErr(){
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
        getUserComments()
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


  function addComment(newComment) {
    userAxios.post('/api/comments', newComment)
      .then(res => {
        setuserState(prevState => ({
          ...prevState,
          comments: [...prevState.comments, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }
  function addUpVote(newUpVote, id) {
    userAxios.put(`/api/issue/upVote/${id}`, newUpVote)
      .then(res => {

        getUserIssues()
      })
      .catch(err => console.log(err.response.data.errMsg))
  }
  function addDownVote(newDownVote, id) {
    userAxios.put(`/api/issue/downVote/${id}`, newDownVote)
      .then(res => {

        getUserIssues()
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
  function deleteUserIssues(deletedIssue) {
    userAxios.delete('/api/issue/user', deletedIssue)
      .then(res => {
      
      setuserState(prevState => ({
        ...prevState,
        issues: res.data
      }))
    })
      .catch(err => console.log(err.response.data.errMsg))
  }


  function getUserComments() {
    userAxios.get('/api/comments/user')
      .then(res => {
        setuserState(prevState => ({
          ...prevState,
          comments: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }



  return (
    <UserContext.Provider value={{ ...userState, signUp, login, logout, addIssue, addComment, addUpVote, addDownVote, deleteUserIssues, resetAuthErr}}>
      {props.children}
    </UserContext.Provider>
  )
}