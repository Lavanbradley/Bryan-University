const express = require('express')
const mysql = require('mysql2')


//Create connection string
const db =mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Football1!',
  //Establish connection to newly created DB
  database: '7Nov2021'
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
  let sql = "CREATE DATABASE 7Nov2021";
  //Run the SQL command
  db.query(sql, (err, result)=>{
    if(err){
      throw err;    
  }
  console.log(result);
  res.send("7Nov2021 Database created successfully!");
    })
  })


//Create a table
app.get('/CreateTable', (req,res)=>{
  let sql = "CREATE TABLE postings(id INT AUTO_INCREMENT, title VARCHAR(100), message VARCHAR(250), PRIMARY KEY (id))";
  //Run the SQL command
  db.query(sql, (err, result)=>{
    if(err){
      throw err;    
  }
  console.log(result);
  res.send("Posting table created successfully!");
    })
  })


//Insert One Row Into Table

app.get('/InsertRow1', (req,res)=>{
  let post = {title: 'First Posting', message: 'This is my first message'}
  let sql = "INSERT INTO postings SET ?"
    //Run the SQL command
  db.query(sql, post, (err, result)=>{
    if(err){
      throw err;    
  }
  console.log(result);
  res.send("Row 1 inserted in postings table!");
    })
  })

  //Insert one row at a time

app.get('/InsertRow2', (req,res)=>{
  let post = {title: 'Second Posting', message: 'This is my second message'}
  let sql = "INSERT INTO postings SET ?"
    //Run the SQL command
  db.query(sql, post, (err, result)=>{
    if(err){
      throw err;    
  }
  console.log(result);
  res.send("Row 2 inserted in postings table!");
    })
  })

//Execute a SELECT query

app.get('/GetPosts', (req,res)=>{
  let sql = "SELECT * FROM postings";
  //Run the SQL command
  db.query(sql, (err, result)=>{
    if(err){
      throw err;    
  }
  console.log(result);
  res.send("SELECT Query (without the WHERE clause) Executed successfully!");
    })
  })

  //SELECT a specific query using WHERE clause

app.get('/GetPost/:id', (req,res)=>{
  let sql = `SELECT * FROM postings WHERE id = ${req.params.id}`;
  //Run the SQL command
  db.query(sql, (err, result)=>{
    if(err){
      throw err;    
  }
  console.log(result);
  res.send("SELECT Query (with a WHERE clause) Executed successfully!");
    })
  })


  //UPDATE QUERY

  app.get('/UpdatePost/:id', (req,res)=>{
    let newTitle = "Data updated from Front_End"
    let sql = `UPDATE postings SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    //Run the SQL command
    db.query(sql, (err, result)=>{
      if(err){
        throw err;    
    }
    console.log(result);
    res.send("updated from the front end!");
      })
    })


  //Delete Query

  app.get('/DeletePost/:id', (req,res)=>{
    let sql = `DELETE FROM postings WHERE id = ${req.params.id}`;
    //Run the SQL command
    db.query(sql, (err, result)=>{
      if(err){
        throw err;    
    }
    console.log(result);
    res.send("DELETE clause executed successfully!");
      })
    })



//Open and listen from the port

app.listen('4000', () => {
  console.log("Local web server is up and running");
});


