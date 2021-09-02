import { useState } from 'react'
import KillFormHandler from './KillFormHandler';
import './components.css'
function ShowKills({ deleteKill, editKill, firstName, lastName, bountyAmount, type, _id, living }) {


  console.log('living: ', living)

  const [editToggle, setEditToggle] = useState(false)



  return (

    <div className="KillList">


      {!editToggle ?
        <>

          <h1 className='killList'>First Name: {firstName} </h1>
          <h1 className='killList'>Last Name: {lastName} </h1>
          <h3 className='killList'>Bounty: {bountyAmount}</h3>
          <p className='killList'>Type: {type}</p>
          <p className='killList'>ID: {_id}</p>
          <p className='killList'>Living: {living === true ? 'Yes' : 'No'}</p>
          <button onClick={() => deleteKill(_id)}>Delete</button>
          <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
        </>

        :

        <>
          <KillFormHandler
            firstName={firstName}
            lastName={lastName}
            bountyAmount={bountyAmount}
            _id={_id}
            type={type}
            living={living}
            btnText='Submit Edit'
            submit={editKill} />

          <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>

            Close
          </button>
        </>
      }
    </div>
  )



}

export default ShowKills;