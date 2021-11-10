import React, { useContext, useState, useEffect } from 'react'
import CommentForm from './CommentForm'
import { UserContext } from '../context/UserProvider.js'
import CommentList from './CommentList'
import axios from "axios";
const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function Issues(props) {

  const { title, issue, _id, upVote, downVote } = props

  const [comments, setComments] = useState([])
  const [issues, setIssues] = useState([])
  const { addUpVote, addDownVote } = useContext(UserContext)

  useEffect(() => {
    getUserComments()
    
  }, [])


  function addComment(newComment) {
    userAxios.post('/api/comments/', newComment)
      .then(res => {
        setComments(prevState => (
          [...prevState, res.data]
        ))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function getUserComments() {
    userAxios.get('/api/comments/user')
      .then(res => {
        setComments(prevState => (
          [...prevState,
          res.data]
        ))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }
 
  function deleteUserIssues(id) {
    userAxios.delete(`/api/issue/${id}`)
      .then(res => {

        setIssues(prevState => (
          [...prevState,
          res.data]
        ))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }
  //BRING GET ISSUES TO THIS PAGE
  


  return (

    <div className='issue-container'>
      <h1>Title: {title}</h1>
      <h3>Issue:  {issue}</h3>
      <h6>User {_id}</h6>
      <h6>Up Votes: {upVote}</h6>
      <h6>Down Votes: {downVote}</h6>
      <CommentForm addComment={addComment} />
      <button onClick={e => {
        addUpVote({ upVote: upVote + 1 }, _id)
      }}>Up Vote</button>

      <button onClick={e => {
        addDownVote({ downVote: downVote + 1 }, _id)
      }}>Down Vote</button>


      <button onClick={e => {
        deleteUserIssues(_id)
      }}>Delete</button>
      <h6>COMMENTS</h6>
      <CommentList comments={comments} />
    </div>
  )
}

export default Issues;
















