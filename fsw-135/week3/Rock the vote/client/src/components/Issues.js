import React, {useContext} from 'react'
import CommentForm from './CommentForm'
import { UserContext } from '../context/UserProvider.js'
import CommentList from './CommentList'
function Issues(props) {
const {title, issue, _id, upVote,downVote } = props

const {addComment, comments, addUpVote, addDownVote, deleteUserIssues } = useContext(UserContext) 



console.log(issue);
console.log(upVote, downVote);

  return (
    
    <div  className = 'issue-container'>
      <h1>Title: {title}</h1>
      <h3>Issue:  {issue}</h3>
      <h6>User {_id}</h6>
      <h6>Up Votes: {upVote}</h6>
      <h6>Down Votes: {downVote}</h6>
      <CommentForm addComment={addComment}/>
      <button onClick = {e =>{
        addUpVote({upVote: upVote + 1}, _id)
      }}>Up Vote</button>

      <button onClick = {e =>{
        addDownVote({downVote: downVote + 1}, _id)
      }}>Down Vote</button>


      <button onClick = {deleteUserIssues}>Delete</button>
      <h6>COMMENTS</h6>
      <CommentList comments={comments}/>
    </div>
  )
}

export default Issues;
















