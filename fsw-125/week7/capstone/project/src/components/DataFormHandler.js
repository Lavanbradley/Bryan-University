import React, { useState } from 'react'
import './components.css'
function DataFormHandler({ submit, _id, team, city, superbowl, players, established }) {
  
  
  const initialInputs = {city: city || '', team: team || '', players: players || '', established: established || '', superbowl:  superbowl || ''}


  const [inputs, setInputs] = useState(initialInputs)


  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs(prevInputs => ({ ...prevInputs, [name]: value }))

  }

  function handleChange_superbowl(e) {
    console.log(e.target.value, typeof e.target.value);
    if( e.target.value === 'true' || e.target.value === 'false'){
      const superbowl = e.target.value === 'true' ? true : false

      setInputs(prevInputs => ({ ...prevInputs, [e.target.name]: superbowl }))
    }
   
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    //POST
    submit(inputs, _id)
    console.log('input', inputs);
    setInputs(initialInputs)
  }


  return (
    <div>
 <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='city'
          value={inputs.city}
          onChange={handleChange}
          placeholder='City'

        />
        <input
          type="text"
          name='team'
          value={inputs.team}
          onChange={handleChange}
          placeholder='Team'
        />
        <input
          type="number"
          name='established'
          value={inputs.established}
          onChange={handleChange}
          placeholder='Established'
        />
        <input
          type="text"
          name='players'
          value={inputs.players}
          onChange={handleChange}
          placeholder='Add Players'
        />
        <input
          type="text"
          name='superbowl'
          // value={inputs.superbowl}
          onChange={handleChange_superbowl}
          placeholder='Superbowl true or false'
        />
        <button className="addDataBtn">{"Add Data"}</button>
      </form>
    </div>
  )
}

export default DataFormHandler
