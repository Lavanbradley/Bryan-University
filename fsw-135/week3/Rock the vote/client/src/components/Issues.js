import React from 'react'

function Issues(props) {
const {title, issue, _id, upVote } = props







  return (
    <div className = 'issue-container'>
      <h1>{title}</h1>
      <h3>{issue}</h3>
      <h6>{_id}</h6>
      <h6>{upVote}</h6>
      <button>Like</button>
      <button>Delete</button>
    </div>
  )
}

export default Issues;
















