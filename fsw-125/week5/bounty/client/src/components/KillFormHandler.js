import { useState } from 'react'
import './components.css'

function KillFormHandler({ submit, firstName, lastName, btnText, type, living, bountyAmount, _id }) {


  const initialInputs = { firstName: firstName || '', lastName: lastName || '', living: living, bountyAmount: bountyAmount || '', type: type || '' }

  const [inputs, setInputs] = useState(initialInputs)


  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs(prevInputs => ({ ...prevInputs, [name]: value }))

  }

  function handleChange_living(e) {
    const living = e.target.value === 'true' ? true : false

    setInputs(prevInputs => ({ ...prevInputs, [e.target.name]: living }))
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
          name='firstName'
          value={inputs.firstName}
          onChange={handleChange}
          placeholder='First Name'

        />
        <input
          type="text"
          name='lastName'
          value={inputs.lastName}
          onChange={handleChange}
          placeholder='Last Name'
        />
        <input
          type="text"
          name='bountyAmount'
          value={inputs.bountyAmount}
          onChange={handleChange}
          placeholder='Bounty Amount'
        />
        <input
          type="text"
          name='type'
          value={inputs.type}
          onChange={handleChange}
          placeholder='Jedi or Sith'
        />
        <input
          type="text"
          name='living'
          value={inputs.living}
          onChange={handleChange_living}
          placeholder='true or false'
        />
        <button>{btnText = "Add Kill"}</button>
      </form>
    </div>
  )
}

export default KillFormHandler;