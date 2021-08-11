import { useState } from 'react';

import './App.css';

function App() {
  const [cars, setCars] = useState([""])
  const [favCar, setFavCar] = useState([""])

  const handleChange = (event) => {
    setFavCar(event.target.value)
  }

  const addCar = () => {
    const newCars = [...cars];
    newCars.push(favCar);
    setCars(newCars);
    setFavCar('')
  }

  const carList = cars.map((car, index)=> <div key = {index}>{car}</div>)
  console.log(favCar);

  return (
    
    <>
    <label>Car: <input type = "text" value = {favCar} onChange = {handleChange}/></label>
    <button onClick = {addCar}>Add car</button>
    <h5>My list of fav cars is :</h5>
    <h5>{carList}</h5>
    </>
    
  );
}

export default App;
