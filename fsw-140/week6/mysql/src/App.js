import react,{useState} from 'react';
import './App.css';
const express = require('express')
const mysql = require('mysql2')

function App() {
const [database, setDataBase] = useState('')
//Create connection string
const db =mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Football1!',
  //Establish connection to newly created DB
  database: '5Nov2021'
});


//Establish a connection

db.connect((err) =>{
  if(err){
      throw err;    
  }
  console.log("MySQL Database Connection Established Successfully!");
    })



//Setup the express server

const app = express();

//Create a test database
app.get('/CreateDB', (req,res)=>{
  let sql = "CREATE DATABASE 5Nov2021";
  //Run the SQL command
  db.query(sql, (err, result)=>{
    if(err){
      throw err;    
  }
  console.log(result);
  res.send("5Nov2021 Database created successfully!");
    })
  })



  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Title"/>
    
      <button>Add Database</button>
    </form>
    </div>
  );
}

export default App;
