import React from 'react'
import Comments from './Comments'

export default function IssueList(props){
  const {comments} = props
  // console.log(comments);
return (
  <div className="issueList">
  {comments.map(comment => <Comments {...comment} key ={comment._id}/>)}
  
  </div>
)
}