
import './App.css';
import React, { useState } from 'react';
import axios from 'axios'
function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);
  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState('')
  const [newPosition, setNewPosition] = useState('')
  const [newCountry, setNewCountry] = useState('')
  const [newWage, setNewWage] = useState(0)
  const [edit, setEdit] = useState(false)
  const [edit2, setEdit2] = useState(false)
  
  
  const addEmployee = () => {
    axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage
    }). then (() => {
      setEmployeeList([...employeeList,{
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage
      } ])
      setEdit2(!edit2)
      setEdit(!edit)
    })
  }

  const getEmployees = () => {
    axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data)
    })
  }

  const updateEmployee = (id) => {
    axios.put('http://localhost:3001/update', {name: newName, age: newAge ,country: newCountry, position: newPosition ,wage: newWage, id: id}).then((response) =>{
      setEmployeeList(employeeList.map((val) => {
        return val.id == id 
        ? {
          id: val.id,
           name: newName, 
           country: newCountry,
            age: newAge,
             position: newPosition,
              wage: newWage
            }
             : val
      }))
      setEdit(!edit)
      setEdit2(!edit2)
    })
  }

  const deleteEmployee = (id) => {
axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
setEmployeeList(employeeList.filter((val) => {
  return val.id != id 
}))
setEdit(!edit)
setEdit2(!edit2)
})

}

const toggleEdit = () => {
  setEdit(!edit)
}
const toggleEdit2 = () => {
  setEdit2(!edit2)
}
  return (
    
    <div className="App">
<button onClick={() => toggleEdit2()}>NEW EMPLOYEE</button>
{!edit2 ? (
              <>
   
          </>
            ) : (
             <>
      <div className="information">
      
     
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value)
          }} />

        <label>Age:</label>

        <input type="number"
          onChange={(event) => {
            setAge(event.target.value)
          }} />

        <label>Country:</label>

        <input type="text"
          onChange={(event) => {
            setCountry(event.target.value)
          }} />

        <label>Position:</label>

        <input type="text"
          onChange={(event) => {
            setPosition(event.target.value)
          }} />

        <label>Wage (Year):</label>

        <input type="number"
          onChange={(event) => {
            setWage(event.target.value)
          }} />

        <button onClick={addEmployee}>ADD EMPLOYEE</button>

      </div>
      </>
            )
        
}

    
      <div className="employees">
      <button onClick={getEmployees}>SHOW EMPLOYEES</button>
      {employeeList.map((val,key) => {
        return <div className="employee">
          <div>
          <h3>Name: {val.name}</h3>
          <h3>Age: {val.age}</h3>
          <h3>Country: {val.country}</h3>
          <h3>Position: {val.position}</h3>
          <h3>Wage: {val.wage}</h3>
          </div>
          <div> 
          <button onClick={() => toggleEdit()}>EDIT</button>
          
           
            {!edit ? (
              <>
   
          </>
            ) : (
             <>
              
               <input type="text" placeholder="NAME"
          onChange={(event) => {
            setNewName(event.target.value)
          }}/> 
               <input type="text" placeholder="AGE"
          onChange={(event) => {
            setNewAge(event.target.value)
          }}/> 
               <input type="text" placeholder="COUNTRY"
          onChange={(event) => {
            setNewCountry(event.target.value)
          }}/> 
               <input type="text" placeholder="POSITION"
          onChange={(event) => {
            setNewPosition(event.target.value)
          }}/> 
               <input type="text" placeholder="WAGE"
          onChange={(event) => {
            setNewWage(event.target.value)
          }}/> 
                 <button onClick={()=>{updateEmployee(val.id)}}>UPDATE</button>
          <button onClick={() => {deleteEmployee(val.id)}}>DELETE</button>
             </>
            )
            }
          
          </div>
        </div>
      })}

     
      </div>


     
    </div>
  );
    
}

export default App;
