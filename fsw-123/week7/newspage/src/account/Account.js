import React, { useState } from 'react'

function Account() {
  
  const [firstName, setFirstName] = useState("Lavan")
  const [lastName, setLastName] = useState("Bradley")
  const [email, setEmail] = useState("123ABC@gmail.com")

  const [edit, editToggle] = useState(false)




  return (
    <div>

      {!edit ?
        <div className="account">
          <h3>{firstName}</h3>
          <h3>{lastName}</h3>
          <h3>{email}</h3>
        </div>
        :
        <>
          <input onChange={e =>setFirstName(e.target.value)}  type="text" name="firstName" value={firstName} />
          <input onChange={e =>setLastName(e.target.value)} type="text" name="lastName" value={lastName} />
          <input onChange={e =>setEmail(e.target.value)} type="text" name="email"value={email} />
        </>

      }





      <button className="accountButton" onClick={e =>editToggle(!edit)}>Edit</button>
    </div>
  )
}

export default Account
