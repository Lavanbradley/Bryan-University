import React from 'react'
import { useState } from 'react'
import DataFormHandler from './DataFormHandler'
import './components.css'

function ShowData({team, city, superbowl,players, established,btnText, _id, editData, deleteData}) {
  const [editToggle, setEditToggle] = useState(false)


  return (
    <div>
     {!editToggle ?
    <div className="dataMap">
    
     <h1>{city}</h1>
<h1>{team}</h1>
<h1 className="players">{ players }</h1>
<h1>{established}</h1>
<h1>{superbowl === true ? 'Yes' : 'No'}</h1>
<button className="changeButtons" onClick={() => deleteData(_id)}>Delete</button>
 <button className="changeButtons" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
    </div> 
    
    :
    <>
    <DataFormHandler
    city={city}
    team={team}
    players={players}
    established={established}
    superbowl={superbowl}
    btnText='Submit Edit'
    submit={editData}/>
    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>

    Close
  </button>
  </>
    }
    </div>
  )
}

export default ShowData;
