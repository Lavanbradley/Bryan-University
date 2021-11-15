import React from 'react'
import './components.css'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';


const useStyles = makeStyles({
  navStyle: {
    margin: 20,
    '&:hover': {
    backgroundColor: 'rgb(87, 87, 248)',
    cursor: 'pointer'
     }
  }
})

function Navbar() {
  const classes = useStyles()


  return (
    // <div className="navbar">


    <Container className="navbar">

    <Button 
    color="primary"
     variant="outlined" 
     className={classes.navStyle}
     startIcon={<HomeRoundedIcon/>}
     > 
     <a href="/home">HOME</a> 
     </Button>

    <Button 
    color="primary"
     variant="outlined"
     className={classes.navStyle}>
       <a href="/employees">EMPLOYEES</a>
       </Button>
       

    <Button
     color="primary" 
     variant="outlined"
     className={classes.navStyle}>
       <a href="/addEmployee">ADD EMPLOYEE</a>
        </Button>

    <Button
     color="primary"
      variant="outlined"
      className={classes.navStyle}>
        <a href="/editEmployee">EDIT EMPLOYEE</a> 
        </Button>

   

     </Container>
    // </div>
  )
}

export default Navbar
