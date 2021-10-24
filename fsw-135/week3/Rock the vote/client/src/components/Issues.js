import React from 'react'

function Issues(props) {
const {title, issue, _id} = props
  return (
    <div className = 'issue-container'>
      <h1>{title}</h1>
      <h3>{issue}</h3>
    </div>
  )
}

export default Issues
