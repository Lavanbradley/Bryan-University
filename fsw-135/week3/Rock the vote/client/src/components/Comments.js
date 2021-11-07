import React from 'react'
import './components.css';
function Comments(props) {
  const { comment, _id} = props
  return (
    <div className = "comment">
      <span>{_id}</span>
      <span>:</span>
      <span>{comment}</span>
    </div>
  )
}

export default Comments





