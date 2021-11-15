import React, {useState} from 'react'
import axios from 'axios';
import { TextField, Button, Typography, Paper } from '@material-ui/core'
function AddEmployee() {
  const [name, setName] = useState('');
  
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);
  const [newName, setNewName] = useState('')
  
  const [newPosition, setNewPosition] = useState('')
  
  const [newWage, setNewWage] = useState(0)
 



  const addEmployee = () => {
    axios.post('http://localhost:3001/create', {
      name: name,
      position: position,
      wage: wage
    }). then (() => {
      setEmployeeList([...employeeList,{
        name: name,
        position: position,
        wage: wage
      } ])
     
    })
  }




  return (
    <Paper>
      <h5>ADD EMPLOYEES</h5>
      <TextField
      label="Name"
      variant="outlined"
      color="secondary"
      fullWidth
      required
      onChange={(event) => {
        setName(event.target.value)
      }}
      >
      </TextField>
      <TextField
      label="Position"
      variant="outlined"
      color="secondary"
      fullWidth
      required
      onChange={(event) => {
        setPosition(event.target.value)
      }}
      >
      </TextField>
      <TextField
      label="Wage"
      variant="outlined"
      color="secondary"
      fullWidth
      type='number'
      required
      onChange={(event) => {
        setWage(event.target.value)
      }}
      >
      </TextField>
       <Button color="primary"
     variant="outlined" onClick={addEmployee}> SUBMIT EMPLOYEE</Button>


    </Paper>
  )
}

export default AddEmployee
