import React from 'react'
import { TextField, Button, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import './components.css'

const useStyles = makeStyles({
btn: {
    height: 55,
    '&:hover': {
    backgroundColor: 'rgb(87, 87, 248)',
    cursor: 'pointer',
    
     }
  },
  form: {
    margin: 100,
    
  }
})
function Home() {
  const classes = useStyles()
  return (
    <Container alignItems='center'>
      {/* <h1>HOME</h1> */}
      
      <form className={classes.form} >
        
        <TextField name="username" variant="outlined" label="Username"    />
        <TextField name="password" variant="outlined" label="Password" type="password"  />
        <Button  color='rgb(87, 87, 248)' className={classes.btn}><a href= 'employees'>LOGIN</a></Button>


        
      </form>

    
    </Container>
  )
}

export default Home
