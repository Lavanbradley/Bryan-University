import React, { useState } from 'react'
import './newsLetter.css'
import { v4 as uuidv4 } from 'uuid';


function NewsLetterForm() {
  
  
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()

  const handleSubmit = (event)=>{
    event.preventDefault()
  }
  
  

  

   

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="formArea" >
        <div className="inputArea">
          <label htmlFor="First Name">First Name</label>
          <input 
          type="text"
          placeholder="John"
          value={firstName}
          
          onChange={e => setFirstName(e.target.value)}
          />
          
          <label htmlFor="Last Name">Last Name</label>
          <input 
          type="text"
          placeholder="Smith"
          value={lastName}
         
          onChange={e => setLastName(e.target.value)}
          />
          
          <label htmlFor="Email">Email</label>
          <input 
          type="text"
          placeholder="Abc123@gmail.com"
          value={email}
          
          onChange={e => setEmail(e.target.value)}
          />
         
          <button className="newsBtn">Submit</button>
        </div>
      </form>
      <h3>Account Info</h3>
     <b><span>First Name: </span></b> {firstName}
      <br />
    <b> <span>Last Name: </span></b> {lastName}
      <br />
     <b><span>Email: </span></b> {email}
    </div>
  )
}

export default NewsLetterForm
