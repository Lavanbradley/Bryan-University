import React, { useState } from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import './components.css'


const useStyles = makeStyles({
  btn: {
    '&:hover': {
    backgroundColor: 'rgb(87, 87, 248)',
    cursor: 'pointer'
     }
  }
})


function Employees() {
  const classes = useStyles()
  const [employeeList, setEmployeeList] = useState([]);

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
          </div> 
           })}
    </div>
  )
}

export default Employees
