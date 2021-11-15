const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require("cors")

//Create connection string
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Football1!',
  //Establish connection to newly created DB
  database: 'employee'
});


//Establish a connection

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Database Connection Established Successfully!");
})



//Setup the express server


app.use(express.json())
app.use(cors());



app.post('/create', (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const country = req.body.country
  const position = req.body.position
  const wage = req.body.wage

  db.query('INSERT INTO employees (name,age, country, position, wage) VALUES (?,?,?,?,?)',
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send("Values inserted")
      }
    }

  );



})

app.get('/employees', (req, res) => {
  db.query('SELECT * FROM employees', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})
app.put('/update', (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const age = req.body.age
  const country = req.body.country
  const position = req.body.position
  const wage = req.body.wage
  db.query('UPDATE employees SET name = ?, age = ?, country = ?, position = ? , wage = ? WHERE id = ?', [name, age, country, position, wage, id], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})
app.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  db.query('DELETE FROM employees WHERE id = ?', id, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})


app.listen(3001, () => {
  console.log("Server running on PORT 3001");
})