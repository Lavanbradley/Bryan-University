import React,{useState} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import './components.css'
import TextField from '@material-ui/core/TextField'




const useStyles = makeStyles({
  btn: {
    '&:hover': {
    backgroundColor: 'rgb(87, 87, 248)',
    cursor: 'pointer'
     }
  }
})




function EditEmployee() {
  const [employeeList, setEmployeeList] = useState([]);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);
  const [newName, setNewName] = useState('')
  const [newPosition, setNewPosition] = useState('')
  const [newWage, setNewWage] = useState(0)
  const [edit, setEdit] = useState(false)
  
  const updateEmployee = (id) => {
    axios.put('http://localhost:3001/update', {name: newName, position: newPosition ,wage: newWage, id: id}).then((response) =>{
      setEmployeeList(employeeList.map((val) => {
        return val.id == id 
        ? {
          id: val.id,
           name: newName, 
             position: newPosition,
              wage: newWage
            }
             : val
      }))
      setEdit(!edit)
      
    })
  }
  const toggleEdit = () => {
    setEdit(!edit)
  }
  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
    setEmployeeList(employeeList.filter((val) => {
      return val.id != id 
    }))
    setEdit(!edit)

    })
    
    }


  const classes = useStyles()
  const getEmployees = () => {
    axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data)
    })
  }
  return (
    <div className="employees">
      <h1>EMPLOYEES</h1>
  
      <Container>
        <Button className={classes.btn}  color="primary"
     variant="outlined"  onClick={getEmployees}>
        SHOW EMPLOYEES
        </Button>
      </Container>
      {employeeList.map((val,key) => {
        return <div className="employee">
          <div className="employeeItems">
          <h3>Name: {val.name}</h3>
          <h3>Position: {val.position}</h3>
          <h3>Wage: {val.wage}</h3>
          </div>
          <Button color="primary"
     variant="outlined" onClick={() => toggleEdit()}>EDIT EMPLOYEES</Button>
          <br/>
          {!edit ? (
              <>
   
          </>
            ) : (
             <>
             <TextField
              onChange={(event) => {
                setNewName(event.target.value)
              }}
             label='Name'
             variant='outlined'
             color='primary'
             >

             </TextField>
             <TextField
              onChange={(event) => {
                setNewPosition(event.target.value)
              }}
             label='Position'
             variant='outlined'
             color='primary'
             >

             </TextField>
             <TextField
              onChange={(event) => {
                setNewWage(event.target.value)
              }}
             label='Wage'
             variant='outlined'
             color='primary'
             type='number'
             >

             </TextField>
             <Button color="primary"
     variant="outlined"  onClick={()=>{updateEmployee(val.id)}}>SUBMIT EDIT</Button>
             <Button color="primary"
     variant="outlined"  onClick={()=>{deleteEmployee(val.id)}}>DELETE EMPLOYEE</Button>
             </>
            )
}
          </div> 
           })}
  


    </div>
  )
}

export default EditEmployee
