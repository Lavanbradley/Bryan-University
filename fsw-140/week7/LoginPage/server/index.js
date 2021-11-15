const express = require('express')
const mysql = require('mysql2')
const cors = require("cors")

//Create connection string
const db =mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Football1!',
  //Establish connection to newly created DB
  database: 'login'
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
app.use(express.json())
app.use(cors());

//Registration route
app.post('/register', (req,res) =>{


  const username = req.body.username
  const password = req.body.password

  db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
     [username, password],
      (err, result)=>{
    console.log(err);
  })
})


//Login route
app.post('/login', (req,res) =>{


  const username = req.body.username
  const password = req.body.password
  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
     [username, password],
      (err, result)=>{


        if(err){
          res.send({err: err})
          
        } 
          if (result.length > 0 ){
            res.send(result)
          } else{
            res.send({message: "Wrong username or password"})
          }
        
  })
})

//Open and listen from the port

app.listen('4000', () => {
  console.log("Local web server is up and running");
});